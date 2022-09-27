import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT || '4000'), // PORT env is used by Heroku
    }
};