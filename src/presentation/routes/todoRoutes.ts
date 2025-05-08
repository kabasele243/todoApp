import { Router, Request, Response } from 'express';
import { TodoController } from '../controllers/TodoController';

export function createTodoRoutes(controller: TodoController): Router {
  const router = Router();

  router.post('/', (req: Request, res: Response) => controller.create(req, res));
  router.get('/', (req: Request, res: Response) => controller.list(req, res));
  router.patch('/:id/complete', (req: Request, res: Response) => controller.complete(req, res));
  router.delete('/:id', (req: Request, res: Response) => controller.delete(req, res));

  return router;
}
