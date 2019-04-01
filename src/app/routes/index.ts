import { Router } from 'express';
import { PropertiesRouter } from './properties';
import { AgentsRouter } from './agents';
import { OfficesRouter } from "./offices";

const router = Router()

router.use('/properties', PropertiesRouter);
router.use('/agents', AgentsRouter);
router.use('/offices', OfficesRouter);

export const Routes = router;