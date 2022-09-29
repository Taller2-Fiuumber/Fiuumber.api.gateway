import { Request, Response } from "express";
import { getSomething } from "../services/users";

export const GetSomething = async (req: Request, res: Response) => {
  try {
    const something = await getSomething();
    res.status(200).send(something);
  } catch (error) {
    res.status(500).send(error);
  }
};