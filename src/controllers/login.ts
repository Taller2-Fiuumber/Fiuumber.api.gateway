import { Request, Response } from "express";
import { loginWithEmailAndPassword } from "../services/users";

export const LoginWithEmailAndPassword = async (req: Request, res: Response) => {
  try {
    const email = req.query.email?.toString() || '';
    const password = req.query.password?.toString() || '';
    const loginResponse = await loginWithEmailAndPassword(email, password);
    
    if (!loginResponse) {
      res.status(401).send();
      return;
    }

    res.status(200).send(loginResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};