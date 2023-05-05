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
