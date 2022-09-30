import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT || '4000'), // PORT env is used by Heroku
        tokenSecret: process.env.TOKEN_SECRET || '',
    },
    microservices: {
        users: {
            url: process.env.API_USERS_URL,
            basePath: process.env.API_USERS_BASE_PATH || ''
        }
    }
};
