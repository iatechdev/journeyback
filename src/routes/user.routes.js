import { Router } from 'express';

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


router.post('/', getAllData);
router.post('/read', getOneData);
router.post('/create', createRegister);
router.post('/update/', updateRegister); 
router.post('/login', login); 

export default router;
