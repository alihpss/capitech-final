import { Router } from 'express';
import { UserController } from '../controller/UserController';
import { ensureAuthenticate } from '../middlewares/Authorization';
import Validation from '../middlewares/Validations';
import { UserSchema } from '../validations/userSchema';

const routes = Router();
const userController = new UserController();
const validation = new Validation();

routes.post('/login', userController.auth);
routes.post(
  '/cadastro',
  validation.validate(UserSchema.create),
  userController.register
);
routes.delete('/user/:id', ensureAuthenticate, userController.delete);
routes.put(
  '/user/:id',
  validation.validate(UserSchema.update),
  ensureAuthenticate,
  userController.update
);

export default routes;
