import "reflect-metadata";
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import './database';
import cors from 'cors';
import { router } from './routes/routes';
import { ErrorsUser } from "./errors/handle";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
    if(err instanceof ErrorsUser){
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }

    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`,
    });
})

const port = process.env.PORT || 3333;

app.listen(port, () => {
    console.log(`rodando na pota ${port}`)
})