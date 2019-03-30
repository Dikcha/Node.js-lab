import { Router } from 'express';
import { PropertiesRouter } from './properties';

const router = Router()

router.use('/properties', PropertiesRouter);

export const Routes = router;