import { Request, Response } from "express";
import { Blog } from "../models/blog";
import { User } from "../models/user";
import { Op } from "sequelize";

export async function blogIndex(req: Request, res: Response) {
  try {
    const blogs = await Blog.findAll({
      include: [
        {
          model: User,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    res.render("blogs/index", { blogs, searchQuery: "" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching blogs." });
  }
}

export async function blogDetail(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const blog = await Blog.findOne({
      where: { id },
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    });
    if (blog) {
      res.render("blogs/detail", { blog });
    } else {
      res.status(404).json({ message: "Not found." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the blog." });
  }
}

export function blogNew(_: Request, res: Response) {
  res.render("blogs/new");
}

export function blogEdit(req: Request, res: Response) {
  const id = req.params.id;
  Blog.findByPk(id).then((blog) => {
    if (blog) {
      res.render("blogs/edit", {
        blog: blog
      });
    } else {
      res.status(404).send("Blog not found");
    }
  });
}


export async function blogSearch(req: Request, res: Response) {
  try {
    const query = req.query.q as string;

    const blogs = await Blog.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${query}%`,
            },
          },
          {
            content: {
              [Op.like]: `%${query}%`,
            },
          },
        ],
      },
      include: [
        {
          model: User,
          as: "user",
        },
      ],
    });

    res.render("blogs/index", { blogs, searchQuery: query });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while searching blogs." });
  }
}
