import axios from 'axios';// For API consuming
import { User } from '../domain/user';

export const getSomething = (): Promise<User[]> => {
  return Promise.resolve([{userId: 9}]);
};