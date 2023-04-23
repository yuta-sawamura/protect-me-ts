import express from "express";
import { index, search } from "../controllers/blogController";

const router = express.Router();

router.get("/", index);
router.get("/search", search);

export default router;
