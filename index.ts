import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { CONFIG } from './config';

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => res.send("Fiuumber API Gateway"));

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});