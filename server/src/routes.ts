import express from 'express';
import classesController from './controllers/ClassesController'
import ConnectionController from './controllers/ConnectionController';

const routes = express.Router();
const classesControllers = new classesController();
const connectionController = new ConnectionController();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);
routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);
export default routes;