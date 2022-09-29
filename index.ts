import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { CONFIG } from './config';
import { GetSomething } from './src/controllers/example';
import usersRoutes from './src/routes/users.routes';
import { setupProxies } from './src/middlewares/proxy';
import { ROUTES } from './src/globals/routes';

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

setupProxies(app, ROUTES);

// app.use('/api/users', usersRoutes);

app.get('/api/something', GetSomething);

app.get('/', (req: Request, res: Response) => res.send("Fiuumber API Gateway"));

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});