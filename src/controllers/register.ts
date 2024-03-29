import { Request, Response } from "express";
import { Driver } from "../domain/driver";
import { Passenger } from "../domain/passenger";
import { generateToken } from "../services/auth";
import { registerPassenger, registerDriver } from "../services/users";

export const RegisterPassenger = async (req: Request, res: Response) => {
  try {
    let passenger: Passenger = req.body.passenger;
    passenger = await registerPassenger(passenger);
    const token: string = generateToken(passenger);
    res.status(200).send({user: passenger, token: token});
  } catch (error) {
    res.status(500).send(error);
  }
};

export const RegisterDriver = async (req: Request, res: Response) => {
  try {
    let driver: Driver = req.body.driver;
    driver = await registerDriver(driver);
    const token: string = generateToken(driver);
    res.status(200).send({user: driver, token: token});
  } catch (error) {
    res.status(500).send(error);
  }
};
