import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { initializeApp } from 'firebase/app';
import { CONFIG } from './config';
import { GetSomething } from './src/controllers/example';

const app: Express = express();

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

const firebaseConfig = {
  apiKey: CONFIG.firebase.apiKey,
  authDomain: CONFIG.firebase.authDomain,
  projectId: CONFIG.firebase.projectId,
  storageBucket: CONFIG.firebase.storageBucket,
  messagingSenderId: CONFIG.firebase.messagingSenderId,
  appId: CONFIG.firebase.appId,
  measurementId: CONFIG.firebase.measurementId
};

initializeApp(firebaseConfig);

app.use(cors(corsOptions));

app.get('/api/something', GetSomething);

app.get('/', (req: Request, res: Response) => res.send("Fiuumber API Gateway"));

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});