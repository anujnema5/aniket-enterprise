import { ApiError } from "../utils/responses/api.error.js";
import express from 'express';
import cors from 'cors';

export const primaryMiddlewares = (app) => {
    app.use(express.json());

    // CORS MIDDLEWARE
    app.use(
        cors({
            origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'https://aniket-enterprise.vercel.app', 'https://aniket-enterprise-client.vercel.app', 'https://aniket-enterprises-admin.vercel.app', '*'],
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
            credentials: true,
        })
    );

    // app.use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    //     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //     res.setHeader('Access-Control-Allow-Credentials', true);
    //     next();
    // });


    // FOR TESTING ONLY
    app.get('/', (req, res) => {
        return res.send('SERVER IS RUNNING!! HURRAY🔥🔥')
    })
}

// ERROR HANDLING MIDDLEWARE
export const secondayMiddlewares = (app) => {
    app.use(function (err, req, res, next) {
        return res.status(err.statusCode || 500).json(new ApiError(err.statusCode, err.message))
    })
}