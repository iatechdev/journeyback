import {
    Router
} from 'express';
//import { checkToken } from '../middlewares/middleware'

// importamos todos los metodos que tiene el controlador
// controllers/users.controller.js
// 

import {
    getAllData,
    getOneData,
    createRegister,
    updateRegister,
    login
    // confirmRegister,
    //  session,
    //  forgottenPassword
} from '../controllers/users.controller';

const router = Router();


//  todos las peticiones son en el metodo post
//


router.post('/', getAllData); 
router.post('/read', getOneData);
router.post('/create', createRegister); 
router.post('/update/', updateRegister); 
router.post('/login', login);

export default router;
