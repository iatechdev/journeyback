import {
    Router
} from 'express';
import {
    getAllData,
    updateRegister,
    createRegister
} from '../controllers/levels.controller';

const router = Router();

router.post('/', getAllData);
router.post('/create', createRegister);
router.post('/update/', updateRegister);

export default router;