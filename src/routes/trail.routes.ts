import { Router } from 'express';
import { TrailController } from '../controller/TrailController';

const routes = Router();
const trailController = new TrailController();

routes.get('/trilhas', trailController.getAll);
routes.get('/trilhas/:id', trailController.getOne);
routes.post('/trilhas', trailController.create);
routes.put('/trilhas/:id', trailController.update);
routes.delete('/trilhas/:id', trailController.delete);

export default routes;
