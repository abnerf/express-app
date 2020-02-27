import { Request, Response } from "express";

export const getEcho = (_: Request, res: Response) => {
  res.json({ message: "Use POST to echo" });
};

export const postEcho = (req: Request, res: Response) => {
  res.send(req.body);
};
