import { NextFunction, Request, Response } from 'express';

var jwt = require('jsonwebtoken');

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');
    if (!token) return res.status(401).json({ error: 'Permission denied' });

    try {
        jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    } catch (error) {
        res.status(400).json({error: 'Inavlid access token'});
    }
}