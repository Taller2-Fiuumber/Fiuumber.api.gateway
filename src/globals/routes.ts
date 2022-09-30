// import { Request, Response, NextFunction } from 'express';
import { CONFIG } from '../../config';

export const ROUTES = [
    // {
    //     url: CONFIG.microservices.users.basePath + '/register',
    //     auth: false,
    //     creditCheck: false,
    //     rateLimit: {
    //         windowMs: 15 * 60 * 1000,
    //         max: 5
    //     },
    //     proxy: {
    //         target: CONFIG.microservices.users.url,
    //         changeOrigin: true,
    //         pathRewrite: {[`^/api/users-service/register`]: '/fact'},
    //         onProxyRes: (proxyRes: any, req: any, res: any) => {
    //             // console.log(proxyRes);
    //             var _write = res.write;
    //             var output: any;
    //             var body = "";
    //             proxyRes.on('data', function(data: any) {
                    
    //                 var temp = JSON.parse(data.toString('utf-8'));
    //                 console.log(temp)
    //                 // data = data.toString('utf-8');
    //                 // body += data;

    //             });
    //             // res.write = function (_data: any) {
    //             //     try{
    //             //     eval("output="+body)
    //             //     output = mock.mock(output)
    //             //     _write.call(res,JSON.stringify(output));
    //             //     } catch (err) {}
    //             // }
    //         }
    //     },
    // },
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
