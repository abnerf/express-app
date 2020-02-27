import { Request, Response } from "express";

export const getVersion = (_: Request, res: Response) => {
  // Returns the package.json version field.
  res.json({ version: process.env.npm_package_version });
};
