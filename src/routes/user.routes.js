import { Router } from 'express';

import {
  resetPassword
} from '../controllers/pass.controller';

import {
  getAllData,
  getOneData,
  createRegister,
  updateRegister,
  login
} from '../controllers/users.controller';


const router = Router();


//  todos las peticiones son en el metodo post
//


router.post('/', getAllData);//trae todos los datos
router.post('/read', getOneData);//trae un dato
router.post('/create', createRegister);// crea un registro
router.post('/update', updateRegister); // actualiza un registro
router.post('/resetpass', resetPassword);
router.post('/login', login);




export default router;
