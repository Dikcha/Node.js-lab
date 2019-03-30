import { Router } from 'express'
import * as HttpStatus from 'http-status-codes';
import * as PropertiesCtrl from '../controllers/properties';
export const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const result = await PropertiesCtrl.getListOfProperties(req);

        res.status(HttpStatus.OK).json(result);
    }
    catch (err) {
        next(err);
    }
});

export const PropertiesRouter =  router;