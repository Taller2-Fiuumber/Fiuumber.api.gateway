import express, { Express } from 'express';
import cors from 'cors';
import { CONFIG } from './config';
import { setupProxies } from './src/middlewares/proxy';
import { ROUTES } from './src/globals/routes';

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

setupProxies(app, ROUTES);

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});