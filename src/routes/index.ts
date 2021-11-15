import { Router } from 'express';
import * as PageController from '../cotrollers/script'
const router = Router();


router.get('/', PageController.home);


export default router;