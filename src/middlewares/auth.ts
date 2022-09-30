import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { CONFIG } from '../../config';


export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ error: 'Permission denied' });

    try {
        jwt.verify(token, CONFIG.app.tokenSecret);
        next();
    } catch (error) {
        res.status(400).json({error: 'Inavlid access token'});
    }
}