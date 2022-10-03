import { Router, Request, Response, NextFunction } from 'express';
import { verifyToken } from '../middlewares/auth';
import * as user_controller from '../controllers/users';

const usersRoutes = Router();

usersRoutes.get('/user', user_controller.GetUser);

usersRoutes.get('/auth/user', user_controller.GetAuthUser);

usersRoutes.post('/auth/user', user_controller.Register);

usersRoutes.put('/auth/userPassword', user_controller.UpdatePassword);

usersRoutes.delete('/auth/user', user_controller.DeleteUser);

usersRoutes.get('/auth/login', verifyToken, async (req: Request, res: Response) => {

    res.json({
        error: null,
        data: 'Boeeenas'
    })
});

export default usersRoutes;
