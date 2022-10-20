import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
    app: {
        port: parseInt(process.env.PORT || '4000'), // PORT env is used by Heroku
        tokenSecret: process.env.TOKEN_SECRET || '',
        devMode: !!process.env.DEV_MODE
    },
    firebase: {
        apiKey: process.env.FIREBASE_API_KEY || "",
        authDomain: process.env.FIREBASE_AUTH_DOMAIN || "",
        projectId: process.env.FIREBASE_PROJECT_ID || "",
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "",
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "",
        appId: process.env.FIREBASE_API_ID || "",
        measurementId: process.env.FIREBASE_MEASUREMENT_ID || ""
    },
    microservices: {
        users: {
            url: process.env.API_USERS_URL || '',
            basePath: process.env.API_USERS_BASE_PATH || ''
        },
        trips: {
            url: process.env.API_TRIPS_URL || '',
            basePath: process.env.API_TRIPS_BASE_PATH || ''
        }
    }
};
