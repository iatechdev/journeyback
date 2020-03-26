import {
    Router
} from 'express';


import {
    getAllData,
    getOneData,
    createRegister,
    updateRegister
} from '../controllers/aircrafts.controller';

const router = Router();


//  todos las peticiones son en el metodo post
//


router.post('/', getAllData); 
router.post('/read', getOneData);
router.post('/create', createRegister); 
router.post('/update/', updateRegister); 

export default router;
