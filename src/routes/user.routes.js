import { Router } from 'express';


import {
  getAllData,
  getOneData,
  createRegister,
  updateRegister,
  login,
  resetPassword
} from '../controllers/users.controller';

const router = Router();


//  todos las peticiones son en el metodo post
//


router.post('/', getAllData);//trae todos los datos
router.post('/read', getOneData);//trae un dato
router.post('/create', createRegister);// crea un registro
router.post('/update/', updateRegister); // actualiza un registro
router.post('/login', login); //sirve de login hay que incluirle el jwt
router.post('/resetPassword', resetPassword); //sirve de login hay que incluirle el jwt


export default router;
