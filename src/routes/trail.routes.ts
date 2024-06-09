import { Router } from 'express';
import { TrailController } from '../controller/TrailController';
import { ensureAuthenticate } from '../middlewares/Authorization';

const routes = Router();
const trailController = new TrailController();

routes.get('/trilhas', trailController.getAll);
routes.get('/trilhas/:id', trailController.getOne);
routes.post('/trilhas', ensureAuthenticate, trailController.create);
routes.put('/trilhas/:id', ensureAuthenticate, trailController.update);
routes.delete('/trilhas/:id', ensureAuthenticate, trailController.delete);

export default routes;
