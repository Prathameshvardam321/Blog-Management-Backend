import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';



const router = express.Router();

router.get('/',userController.getAllUsers)
//route to create a new user
router.post('/', newUserValidator, userController.register);
//route to check login
router.post('/login',userController.login)


export default router;
