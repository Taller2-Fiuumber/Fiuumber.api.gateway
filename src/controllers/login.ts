import { Request, Response } from "express";
import { loginUserWithEmailAndPassword, loginAdministratorWithEmailAndPassword } from "../services/users";
``
export const LoginUserWithEmailAndPassword = async (req: Request, res: Response) => {
  try {
    const email = req.query.email?.toString() || '';
    const password = req.query.password?.toString() || '';
    const loginResponse = await loginUserWithEmailAndPassword(email, password);

    if (!loginResponse) {
      res.status(401).send();
      return;
    }

    res.status(200).send(loginResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const LoginAdministratorWithEmailAndPassword = async (req: Request, res: Response) => {
  try {
    const email = req.query.email?.toString() || '';
    const password = req.query.password?.toString() || '';
    const loginResponse = await loginAdministratorWithEmailAndPassword(email, password);

    if (!loginResponse) {
      res.status(401).send();
      return;
    }

    res.status(200).send(loginResponse);
  } catch (error) {
    res.status(500).send(error);
  }
};
