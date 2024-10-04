import express, { Request, Response } from 'express';
import dotenv from 'dotenv'; 
dotenv.config();

import router from './router/router';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', router);

app.listen(PORT, () => {
    console.log("SERVER OPEN IN PORT - ", PORT);
})

export default app;