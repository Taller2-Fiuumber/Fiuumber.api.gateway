import express, { Express } from 'express';
import cors from 'cors';
import { initializeApp } from 'firebase/app';
import { CONFIG } from './config';
import { setupProxies } from './src/middlewares/proxy';
import { ROUTES } from './src/globals/routes';
import bodyParser from 'body-parser';
import { RegisterDriver, RegisterPassenger } from './src/controllers/register';
import { LoginWithEmailAndPassword } from './src/controllers/login';

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

app.use(bodyParser.json());

app.use(cors(corsOptions));

app.post(CONFIG.microservices.users.basePath + '/register-passenger', RegisterPassenger);
app.post(CONFIG.microservices.users.basePath + '/register-driver', RegisterDriver);
app.get(CONFIG.microservices.users.basePath + '/login', LoginWithEmailAndPassword);

setupProxies(app, ROUTES);

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.app.port}`);
});