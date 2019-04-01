import { Router } from 'express'
import * as HttpStatus from 'http-status-codes';
import * as OfficesCtrl from '../controllers/offices';

export const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const result = await OfficesCtrl.getListOfOffices(req);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const officeId = +req.params.id;
        const result = await OfficesCtrl.getOfficeById(officeId);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

export const OfficesRouter = router;