import express from "express";
import { blogIndex, blogSearch } from "../controllers/blogController";
import { scoreIndex } from "../controllers/scoreController";

const router = express.Router();

router.get("/", blogIndex);
router.get("/search", blogSearch);
router.get("/score", scoreIndex);

export default router;
