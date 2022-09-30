import { Request, Response } from "express";
import { User } from "../domain/user";
import { register } from "../services/users";

export const Register = async (req: Request, res: Response) => {
  try {
    const user: User = req.body.user;
    console.log(user);
    const passenger = await register(user);
    console.log(passenger);
    res.status(200).send(passenger);
  } catch (error) {
    res.status(500).send(error);
  }
};