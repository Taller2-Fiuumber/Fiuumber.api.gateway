import axios from 'axios';// For API consuming
import { CONFIG } from '../../config';
import { Driver } from '../domain/driver';
import { Passenger } from '../domain/passenger';
import { generateToken } from './auth';

const HEADERS = { headers: { Accept: 'application/json'}};

const URL_USERS = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}`;

export const registerPassenger = async (user: Passenger) => {
  try {
    console.log("REGISTER PASSENGER");
    const url = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/passenger`;
    console.log(url);

    const response = await axios.post(url, {...user}, HEADERS,);

    console.log(response.data);

    return response.data;

  } 
  catch (error) {
    console.log("ERROR");
      console.log(error);
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
    const url = `${URL_USERS}/login?email=${_email}&password=${_password}`;

    const response = await axios.get(url, HEADERS,);

    const token = generateToken(response.data);
    return {token: token, user: response.data};
  } 
  catch (error: any) {
      if (error.response.status == 401) return null;
      throw error;
  }
};