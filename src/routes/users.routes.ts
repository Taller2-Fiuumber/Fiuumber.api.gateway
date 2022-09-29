import { Router, Request, Response } from 'express';
import { verifyToken } from '../middlewares/auth';

const usersRoutes = Router();

usersRoutes.get('/register', async (req: Request, res: Response) => {

    res.json({
        error: null,
        data: 'Boeeenas'
    })
});

usersRoutes.get('/login', verifyToken, async (req: Request, res: Response) => {

    res.json({
        error: null,
        data: 'Boeeenas'
    })
});

export default usersRoutes;