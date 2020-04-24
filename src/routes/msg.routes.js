import {
    Router
} from 'express';
import multer from 'multer';

import {
    getAllData,
    getOneData,
    createRegister
} from '../controllers/msgs.controller';
const multerupload = multer({
    dest: './uploads/'
})
const router = Router();


//  todos las peticiones son en el metodo post
//


router.post('/', getAllData);
router.post('/read', getOneData);
router.post('/create', multerupload.any(), createRegister);





export default router;