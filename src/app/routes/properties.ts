import { Router } from 'express'
import * as HttpStatus from 'http-status-codes';
import * as PropertiesCtrl from '../controllers/properties';

export const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const result = await PropertiesCtrl.getListOfProperties(req);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        res.status(err.status).json(err);
        next(err);
    }
});

router.post('/create', async (req, res, next) => {
    try {
        const property = req.body;
        const result = await PropertiesCtrl.createProperty(property);

        res.status(HttpStatus.CREATED).json(result);

    } catch (err) {
        res.status(err.status).json(err);
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const propertyId = +req.params.id;
        const result = await PropertiesCtrl.getPropertyById(propertyId);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        res.status(err.status).json(err);
        next(err);
    }
});

router.put('/update/:id', async (req, res, next) => {
    try {
        const propertyId = +req.params.id;
        const property = req.body;
        const result = await PropertiesCtrl.updateProperty(propertyId, property);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        res.status(err.status).json(err);
        next(err);
    }
});

router.delete('/delete', async (req, res, next) => {
    try {
        const propertyId = +req.body.id;
        await PropertiesCtrl.deleteProperty(propertyId);

        res.status(HttpStatus.OK).json();

    } catch (err) {
        res.status(err.status).json(err);
        next(err);
    }
});

router.put('/bind', async (req, res, next) => {
    try {
        const propertyId = +req.body.propertyId;
        const agentId = +req.body.agentId;

        const result = await PropertiesCtrl.bindAgentToProperty(propertyId, agentId);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        res.status(err.status).json(err);
        next(err);
    }
});

router.put('/unbind', async (req, res, next) => {
    try {
        const propertyId = +req.body.propertyId;
        const result = await PropertiesCtrl.unbindAgent(propertyId);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        res.status(err.status).json(err);
        next(err);
    }
})

export const PropertiesRouter = router;