import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from "./app/routes";
import  { db as sequelize } from './database/sequelize';
import { LoggerService } from "./app/services/logger";

async function initializeServer() {
    const server = express();

    server.use(bodyParser.json());

    const loggerService = new LoggerService();
    const logger = loggerService.getLogger();

    server.use(logger);

    server.use('/api', Routes);

    await sequelize.sync();

    server.listen(3000, () => {
        console.log('Server has been started');
    });
}

(async () =>  {
   await initializeServer();
})();
