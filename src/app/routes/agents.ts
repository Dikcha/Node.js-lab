import { Router } from 'express'
import * as HttpStatus from 'http-status-codes';
import * as AgentsCtrl from '../controllers/agents';

export const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const result = await AgentsCtrl.getListOfAgents(req);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
   try {
       const agentId = +req.params.id;
       const result = await AgentsCtrl.getAgentById(agentId);

       res.status(HttpStatus.OK).json(result);

   } catch (err) {
       next(err);
   }
});

router.post('/create', async (req, res, next) => {
   try {
       const agent = req.body;
       const result = await AgentsCtrl.createAgent(agent);

       res.status(HttpStatus.CREATED).json(result);

   } catch (err) {
       next(err);
   }
});

router.put('/update/:id', async (req, res, next) => {
    try {
        const agentId = +req.params.id;
        const agent = req.body;
        const result = await AgentsCtrl.updateAgent(agentId, agent);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

router.delete('/delete', async (req, res, next) => {
    try {
        const id = +req.body.id;
        const result = await AgentsCtrl.deleteAgent(id);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

router.put('/bind', async (req, res, next) => {
    try {
        const officeId = +req.body.officeId;
        const agentId = +req.body.agentId;

        const result = await AgentsCtrl.bindAgentToProperty(officeId, agentId);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

router.put('/unbind', async (req, res, next) => {
    try {
        const agentId = +req.body.agentId;

        const result = await AgentsCtrl.unbindOffice(agentId);

        res.status(HttpStatus.OK).json(result);

    } catch (err) {
        next(err);
    }
});

router.get('/:id/properties', async (req, res, next) => {
   try {
       const result = await AgentsCtrl.getListOfAgentProperties(req);

       res.status(HttpStatus.OK).json(result);

   } catch (err) {
       next(err);
   }
});

export const AgentsRouter = router;