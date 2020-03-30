import {
    Router
} from 'express';
//import { checkToken } from '../middlewares/middleware'
import {
    getAllData,
    updateRegister,
    createRegister
} from '../controllers/deps.controller';

const router = Router();

router.post('/', getAllData);
router.post('/create', createRegister);
router.post('/update/', updateRegister);


export default router;