import {
    Router
} from 'express';
//import { checkToken } from '../middlewares/middleware'
import {
    getAllData
} from '../controllers/deps.controller';

const router = Router();

router.post('/', getAllData);


export default router;