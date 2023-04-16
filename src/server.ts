import express from 'express';
import { Request, Response } from "express";
import { User } from "./models/user";
import { Blog } from "./models/blog";
import path from 'path';

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
    });
    res.render('index', { blogs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching blogs." });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
