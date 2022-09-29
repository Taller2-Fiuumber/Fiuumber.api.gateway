import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
    app: {
        port: parseInt(process.env.PORT || '4000'), // PORT env is used by Heroku
    },
    firebase: {
        apiKey: process.env.API_KEY || "",
        authDomain: process.env.AUTH_DOMAIN || "",
        projectId: process.env.PROJECT_ID || "",
        storageBucket: process.env.STORAGE_BUCKET || "",
        messagingSenderId: process.env.MESSAGING_SENDER_ID || "",
        appId: process.env.API_ID || "",
        measurementId: process.env.MEASUREMENT_ID || ""
    }
};
