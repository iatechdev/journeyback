import { Router } from 'express';
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


router.post('/', getAllData);//trae todos los datos
router.post('/read', getOneData);//trae un dato
router.post('/create', createRegister);// crea un registro
router.post('/update/', updateRegister); // actualiza un registro
router.post('/login', login); //sirve de login hay que incluirle el jwt

/* 
router.post('/confirm', confirmRegister); //corfirmar registro
router.post('/session', checkToken, session); //session de usuario basado en jwt
router.post('/forgottenPassword', forgottenPassword); //recuperar password
 */

 // con esto ya tenemos definido nuestras rutas personalizadas ahora pasamos al controller
export default router;
