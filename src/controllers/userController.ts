import { Request, Response } from "express";
import { Blog } from "../models/blog";
import { User } from "../models/user";

export async function userDetail(req: Request, res: Response) {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findOne({
      where: { id },
      include: [{ model: Blog, as: "blogs" }]
    });

    if (user) {
      res.render("users/detail", { user, userBlogs: user.blogs });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching the user detail." });
  }
}
