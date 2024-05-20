import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import { primaryMiddlewares, secondayMiddlewares } from './middlewares/main.middleware.js';

const app = express();

primaryMiddlewares(app);
app.use(router)
secondayMiddlewares(app);

export { app }