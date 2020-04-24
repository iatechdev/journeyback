import {
    Router
} from 'express';
import multer from 'multer';

import {
    getAllData,
    getOneData,
    createRegister,
    updateRegister
} from '../controllers/aircrafts.controller';
const multerupload = multer({
    dest: './uploads/'
})

const router = Router();


//  todos las peticiones son en el metodo post
//


router.post('/', getAllData); 
router.post('/read', getOneData);
router.post('/create', createRegister); 
router.post('/update/',  updateRegister);

export default router;
