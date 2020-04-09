import {
    Router
} from 'express';


import {
    getAllData,
    getOneData,
    createRegister
} from '../controllers/msgs.controller';

const router = Router();


//  todos las peticiones son en el metodo post
//


router.post('/', getAllData);
router.post('/read', getOneData);
router.post('/create', createRegister);





export default router;