import { Router, Request, Response, NextFunction } from 'express';
import { verifyToken } from '../middlewares/auth';

const usersRoutes = Router();

usersRoutes.get('/register', async (req: Request, res: Response, next: NextFunction) => {
    res.json({
        error: null,
        data: 'Boeeenas'
    });
});

usersRoutes.get('/login', verifyToken, async (req: Request, res: Response) => {

    res.json({
        error: null,
        data: 'Boeeenas'
    })
});

export default usersRoutes;