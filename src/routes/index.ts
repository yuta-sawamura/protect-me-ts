import express from "express";
import {
  blogIndex,
  blogSearch,
  blogNew,
  blogEdit,
  blogDetail,
} from "../controllers/blogController";
import { scoreIndex } from "../controllers/scoreController";
import { Request, Response } from "express";

const router = express.Router();

router.get("/", blogIndex);
router.get("/search", blogSearch);
router.get("/blog/new", blogNew);
router.get("/blog/:id/edit", blogEdit);
router.get("/blog/:id", blogDetail);
router.get("/login", (req: Request, res: Response) => {
  res.render("login");
});
router.get("/score", scoreIndex);

export default router;
