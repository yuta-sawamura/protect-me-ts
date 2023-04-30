import { Request, Response } from "express";

export async function scoreIndex(req: Request, res: Response) {
  res.render("scores/index");
}
