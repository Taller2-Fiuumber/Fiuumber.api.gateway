import express, { Express } from 'express';
import cors from 'cors';
import { initializeApp } from 'firebase/app';
import { CONFIG } from './config';
import { setupProxies } from './src/middlewares/proxy';
import { ROUTES } from './src/globals/routes';
import bodyParser from 'body-parser';
import { RegisterDriver, RegisterPassenger } from './src/controllers/register';
import { LoginWithEmailAndPassword } from './src/controllers/login';
import { Welcome } from './src/controllers/welcome';

console.log(CONFIG.microservices.users.basePath)

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

app.use(cors(corsOptions));

initializeApp(firebaseConfig);

setupProxies(app, ROUTES);

app.use(bodyParser.json());

app.post('/api/auth/register-passenger', RegisterPassenger);
app.post('/api/auth/register-driver', RegisterDriver);
app.get('/api/auth/login', LoginWithEmailAndPassword);

app.get('/', Welcome);

app.listen(CONFIG.app.port, () => {
  console.log(`⚡️[server]: Server is running at port ${CONFIG.app.port}`);
});
