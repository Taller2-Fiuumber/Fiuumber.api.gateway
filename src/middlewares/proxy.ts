import { Application, NextFunction, Request, Response } from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { verifyToken } from "./auth";

const nextFunction = (_req: Request, _res: Response, next: NextFunction) => next();

export const setupProxies = (app: Application, routes: any[]) => {
    routes.forEach(r => {
        const authFunction = r.auth ? verifyToken : nextFunction;
        app.use(r.url, authFunction, createProxyMiddleware(r.proxy));
    })
}