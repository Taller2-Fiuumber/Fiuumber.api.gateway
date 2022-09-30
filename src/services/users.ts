import axios from 'axios';// For API consuming
import { CONFIG } from '../../config';
import { User } from '../domain/user';

const HEADERS = { headers: { Accept: 'application/json'}};

export const register = async (user: User) => {
  try {
    let url: string = `${CONFIG.microservices.users.url}${CONFIG.microservices.users.basePath}/passenger`;

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