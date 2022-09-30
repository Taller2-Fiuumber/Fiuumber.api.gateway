import { Request, Response } from "express";
import { User } from "../domain/user";
import { register } from "../services/users";

export const Register = async (req: Request, res: Response) => {
  try {
    const user: User = req.body.user;
    console.log(user);
    const passanger = await register(user);
    console.log(passanger);
    res.status(200).send(passanger);
  } catch (error) {
    res.status(500).send(error);
  }
};