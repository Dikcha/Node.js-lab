import * as express from 'express';
import { Routes } from "./app/routes";

async function initializeServer() {
    require('dotenv').config();
    const sequelize = require('./database/sequelize');
    const server = express();
    server.use('/api',Routes);
    await sequelize.sync();
    server.listen(3000);
}

(async () =>  {
   await initializeServer();
})();
