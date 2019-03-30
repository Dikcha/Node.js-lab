import * as express from 'express';
import { Routes } from "./app/routes";
import  { db as sequelize } from './database/sequelize';

async function initializeServer() {
    const server = express();
    server.use('/api',Routes);
    await sequelize.sync();
    server.listen(3000);
}

(async () =>  {
   await initializeServer();
})();
