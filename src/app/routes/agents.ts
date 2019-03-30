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

export const AgentsRouter = router;