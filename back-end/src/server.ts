import "reflect-metadata";
import express from 'express';
import 'express-async-errors';

import { router } from './routes/routes';

import './database';

const app = express();

app.use(express.json());

app.use(router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`rodando na pota ${port}`)
})