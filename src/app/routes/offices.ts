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

router.post('/create', async (req, res, next) => {
    try {
        const office = req.body;
        const result = await OfficesCtrl.createOffice(office);

        res.status(HttpStatus.CREATED).json(result);

    } catch (err) {
        next(err);
    }
});

router.put('/update/:id', async (req, res, next) => {
    try {
        const officeId = +req.params.id;
        const office = req.body;
        const result = await OfficesCtrl.updateOffice(officeId, office);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

router.delete('/delete', async (req, res, next) => {
    try {
        const officeId = req.body.id;
        const result = await OfficesCtrl.deleteOffice(officeId);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

router.get('/:id/agents', async (req, res, next) => {
    try {
        const result = await OfficesCtrl.getListOfOfficesAgents(req);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});


export const OfficesRouter = router;