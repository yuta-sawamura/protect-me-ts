import express from "express";
import {
  blogIndex,
  blogSearch,
  blogNew,
  blogEdit,
  blogDetail,
} from "../controllers/blogController";
import { userDetail, createUser, loginUser } from "../controllers/userController";
import { scoreIndex } from "../controllers/scoreController";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", blogIndex);
router.get("/search", blogSearch);
router.get("/blog/new", blogNew);
router.get("/blog/:id/edit", blogEdit);
router.get("/blog/:id", blogDetail);
router.get("/login", (req: Request, res: Response) => {
  const messages = req.flash("success");
  res.render("login", { messages });
});
router.post("/login", loginUser);
router.get("/signup", (req: Request, res: Response) => {
  const messages = req.flash("error");
  res.render("signup", { messages });
});
router.post("/signup", createUser);
router.get("/user/:id", userDetail);
router.get("/score", scoreIndex);

export default router;
