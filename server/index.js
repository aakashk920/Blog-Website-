import express from 'express';
import dontenv from 'dotenv';
import Connection from './database/db.js';
import router from './routes/route.js';
import cors from 'cors'

app.use(cors());
dontenv.config();

const app = express();

app.use('/', router);

const port = 8000;

app.listen(port, () => console.log(`server is running successfully on port ${port}`));
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password); 