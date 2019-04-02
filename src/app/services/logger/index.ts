import * as winston from 'winston';
import * as expressWinston from 'express-winston';

export class LoggerService {
    private readonly logger;

    constructor(message: string = "") {

        this.logger = expressWinston.logger({
            transports: [
                new winston.transports.File({
                    level: 'info',
                    filename: './log.log',
                    maxsize: 10000,
                }),
            ],
            format: winston.format.combine(
                winston.format.timestamp({
                    format: 'YYYY-MM-DD HH:mm:ss'
                }),
                winston.format.simple()
            ),
            msg: `{{res.statusCode}} {{req.method}} {{req.url}} {{JSON.stringify(req.body)}} {{JSON.stringify(req.query)}} {{res.responseTime}} ${message}`,
            meta: false,
            expressFormat: false,
            colorize: false,
            exitOnError: false,
        });
    }

    getLogger() {
        return this.logger;
    }
}