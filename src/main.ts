import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from "./app/routes";
import  { db as sequelize } from './database/sequelize';

async function initializeServer() {
    const server = express();
    server.use(bodyParser.json());
    server.use('/api', Routes);
    await sequelize.sync();
    server.listen(3000, () => {
        console.log('Server has been started');
    });
}

(async () =>  {
   await initializeServer();
})();
