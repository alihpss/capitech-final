import { Router } from 'express';
import { UserController } from '../controller/UserController';

const routes = Router();
const userController = new UserController();

routes.post('/login', userController.auth);
routes.post('/cadastro', userController.register);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

export default routes;
