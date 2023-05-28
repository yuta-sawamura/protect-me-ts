import { Request, Response } from "express";
import { Blog } from "../models/blog";
import { User } from "../models/user";

export async function createUser(req: Request, res: Response) {
  const { username, email, password, passwordConfirm } = req.body;

  if (password !== passwordConfirm) {
    req.flash("error", "Passwords do not match.");
    return res.redirect("/signup");
  }

  try {
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      req.flash("error", "Email already in use.");
      return res.redirect("/signup");
    }

    await User.create({
      name: username,
      email,
      password,
    });

    req.flash("success", "Signed up successfully. Please log in.");
    res.redirect("/login");
  } catch (error) {
    console.error(error);
    req.flash("error", "An error occurred during signup.");
    res.redirect("/signup");
  }
}

export async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      req.flash("error", "Invalid email or password.");
      return res.redirect("/login");
    }

    (req.session as any).userId = user.id;
    req.flash("success", "Logged in successfully.");
    res.redirect("/");
  } catch (error) {
    console.error(error);
    req.flash("error", "An error occurred during login.");
    res.redirect("/login");
  }
}

export async function userDetail(req: Request, res: Response) {
  try {
    const userId = parseInt(req.params.id);
    const user = await User.findOne({
      where: { id: userId },
    });

    const blogs = await Blog.findAll({
      where: { userId: userId },
      include: [
        {
          model: User,
          as: "user",
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    if (user) {
      res.render("users/detail", { user, blogs });
    } else {
      res.status(404).json({ message: "User not found." });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the user detail." });
  }
}
