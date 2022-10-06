import jwt from 'jsonwebtoken';
import { CONFIG } from '../../config';
import { Passenger } from '../domain/passenger';

export const generateToken = (user: Passenger) => {
    const token = jwt.sign(
        { userId: user.userId, email: user.email },
        CONFIG.app.tokenSecret,
        {
          expiresIn: "2h",
        }
    );
    return token;
}