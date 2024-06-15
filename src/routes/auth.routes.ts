import { Router } from 'express';
import { AuthController } from '../controller/AuthController';

const routes = Router();
const authController = new AuthController();

routes.post('/validateToken', authController.validateToken);

export default routes;
