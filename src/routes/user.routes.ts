import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { ensureAuthenticate } from '../middlewares/Authorization';

const routes = Router();
const userController = new UserController();

routes.post('/login', userController.auth);
routes.post('/cadastro', userController.register);
routes.delete('/user/:id', ensureAuthenticate, userController.delete);
routes.put('/user/:id', ensureAuthenticate, userController.update);

export default routes;
