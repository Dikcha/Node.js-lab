import { Router } from 'express';
import { PropertiesRouter } from './properties';
import { AgentsRouter } from './agents';

const router = Router()

router.use('/properties', PropertiesRouter);
router.use('/agents', AgentsRouter);

export const Routes = router;