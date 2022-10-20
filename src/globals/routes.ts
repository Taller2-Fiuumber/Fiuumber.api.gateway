// import { Request, Response, NextFunction } from 'express';
import { CONFIG } from '../../config';

export const ROUTES = [
    {
        url: CONFIG.microservices.users.basePath,
        auth: (true && !CONFIG.app.devMode),
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
    {
        url: CONFIG.microservices.trips.basePath,
        auth: (true && !CONFIG.app.devMode),
        creditCheck: false,
        rateLimit: {
            windowMs: 15 * 60 * 1000,
            max: 5
        },
        proxy: {
            target: CONFIG.microservices.trips.url,
            changeOrigin: true,
            pathRewrite: {/* [`^/api/v1/`]: '',*/},
        }
    },
    // For ws implementation
    // {
    //     target: 'http://localhost:3000',
    //     ws: true,
    //     pathFilter: '/socket',
    //     pathRewrite: {
    //         '^/socket': '',
    //     },
    // }
]
