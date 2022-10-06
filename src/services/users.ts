import axios from 'axios';// For API consuming
import { CONFIG } from '../../config';
import { Driver } from '../domain/driver';
import { Passenger } from '../domain/passenger';
import { generateToken } from './auth';

const HEADERS = { headers: { Accept: 'application/json'}};

export const registerPassenger = async (user: Passenger) => {
  try {
    const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/passenger`;

    const response = await axios.post(url, {...user}, HEADERS,);

    return response.data;

  } 
  catch (error) {
      if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
      } else {
          console.log('unexpected error: ', error);
      }
      throw error;
  }
};

export const registerDriver = async (user: Driver) => {
  try {
    const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/driver`;

    const response = await axios.post(url, {...user}, HEADERS,);

    return response.data;

  } 
  catch (error) {
      if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
      } else {
          console.log('unexpected error: ', error);
      }
      throw error;
  }
};

export const loginWithEmailAndPassword = async (_email: string, _password: string) => {
  try {
    const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/users`;
    // TODO: traer user que cumpla con email y password. Crear endpoint en el MS si no está

    const response = await axios.get(url, HEADERS,);

    if (response) {
      const token = generateToken(response.data);
      return {token: token, user: response.data};
    }
    else {
      throw Error("Unauthorized");
    }
  } 
  catch (error) {
      if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
      } else {
          console.log('unexpected error: ', error);
      }
      throw error;
  }
};