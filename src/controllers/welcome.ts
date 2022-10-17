import { Request, Response } from "express";

export const Welcome = async (req: Request, res: Response) => {
  try {
    res.status(200).send("Fiuumber gateway");
  } catch (error) {
    res.status(500).send(error);
  }
};
