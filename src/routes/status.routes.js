import {
    Router
} from 'express';


import {
    getAllData,
    getOneData,
    createRegister
} from '../controllers/status.controller';

const router = Router();


router.post('/', getAllData);
router.post('/create', createRegister);
router.post('/update/', updateRegister);

export default router;
