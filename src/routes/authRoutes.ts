import { Router } from 'express';
import * as authController from '../controllers/authController';


const router = Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/reset-password', authController.resetPassword);

export default router;
