import express from 'express';
import { Request, Response } from "express";
import { User } from "./models/user";
import { Blog } from "./models/blog";
import path from 'path';
import { Op } from "sequelize";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req: Request, res: Response) => {
  try {
    const blogs = await Blog.findAll({
      include: [
        {
          model: User,
          as: 'user',
        },
      ],
      order: [["createdAt", "DESC"]],
    });
    res.render("index", { blogs, searchQuery: "" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching blogs." });
  }
});

app.get("/search", async (req: Request, res: Response) => {
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

    res.render("index", { blogs, searchQuery: query });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while searching blogs." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
