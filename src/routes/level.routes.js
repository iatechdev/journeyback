import {
    Router
} from 'express';
import {
    getAllData
} from '../controllers/levels.controller';

const router = Router();

router.post('/', getAllData);


export default router;