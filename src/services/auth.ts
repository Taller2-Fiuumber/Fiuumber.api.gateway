import jwt from 'jsonwebtoken';
import { CONFIG } from '../../config';
import { User } from '../domain/user';

export const generateToken = (user: User) => {
    const token = jwt.sign(
        { userId: user.userId, email: user.email },
        CONFIG.app.tokenSecret,
        {
          expiresIn: "2h",
        }
    );
    return token;
}