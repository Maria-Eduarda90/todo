import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';

const router = Router();

const todoController = new TodoController();

router.post("/todo", todoController.create);
router.delete("/todo/:id", todoController.delete);

export { router }