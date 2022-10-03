import { Request, Response } from "express";
import { User } from "../domain/user";
import * as srv_users from "../services/users";

// GetUser
export const GetUser = async (req: Request, res: Response) => {
  try {
    const user: User = req.body.user;
    console.log(user);
    const newUser = await srv_users.getUser(user);
    console.log(newUser);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

// GetLogedInUser
export const GetAuthUser = async (req: Request, res: Response) => {
  try {
    const user = await srv_users.getAuthUser();
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const Register = async (req: Request, res: Response) => {
  try {
    const user: User = req.body.user;
    console.log(user);
    const newUser = await srv_users.registerUserWithEmailAndPassword(user);
    console.log(newUser);
    res.status(200).send(newUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const SignIn = async (req: Request, res: Response) => {
  try {
    const user: User = req.body.user;
    console.log(user);
    const signedUser = await srv_users.signInWithEmailAndPassword(user);
    console.log(signedUser);
    res.status(200).send(signedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};


export const UpdatePassword = async (req: Request, res: Response) => {
  try {
    const newPassword = req.body.password;
    console.log("Recieving new password");
    const updatedUser = await srv_users.updatePassword(newPassword);
    console.log(updatedUser);
    res.status(200).send(updatedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await srv_users.deleteUser();
    console.log(deletedUser);
    res.status(200).send(deletedUser);
  } catch (error) {
    res.status(500).send(error);
  }
};
