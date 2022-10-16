import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT || '4000'), // PORT env is used by Heroku
        tokenSecret: process.env.TOKEN_SECRET || '',
        devMode: !!process.env.DEV_MODE
    },
    firebase: {
        apiKey: process.env.API_KEY || "",
        authDomain: process.env.AUTH_DOMAIN || "",
        projectId: process.env.PROJECT_ID || "",
        storageBucket: process.env.STORAGE_BUCKET || "",
        messagingSenderId: process.env.MESSAGING_SENDER_ID || "",
        appId: process.env.API_ID || "",
        measurementId: process.env.MEASUREMENT_ID || ""
    },
    microservices: {
        users: {
            url: process.env.API_USERS_URL,
            basePath: process.env.API_USERS_BASE_PATH || ''
        }
    }
};
