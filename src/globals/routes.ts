import { CONFIG } from '../../config';

export const ROUTES = [
    {
        url: CONFIG.microservices.users.basePath + '/register',
        auth: false,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: CONFIG.microservices.users.url,
            changeOrigin: true,
            pathRewrite: {},
        }
    },
    {
        url: CONFIG.microservices.users.basePath,
        auth: true,
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: CONFIG.microservices.users.url,
            changeOrigin: true,
            pathRewrite: {/* [`^/api/v1/`]: '',*/},
        }
    },
]
