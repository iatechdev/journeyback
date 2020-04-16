import { Router } from 'express';
import multer from 'multer';
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
const multerupload = multer({
  dest: './uploads/'
})

const router = Router();


//  todos las peticiones son en el metodo post
//


router.post('/', getAllData);//trae todos los datos
router.post('/read', getOneData,);//trae un dato
router.post('/create', multerupload.any(), createRegister);
router.post('/update', multerupload.any(), updateRegister);
router.post('/resetpass', resetPassword);
router.post('/login', login);




export default router;
