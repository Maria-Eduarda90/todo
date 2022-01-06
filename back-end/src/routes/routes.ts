import { Router } from 'express';
import { TodoController } from '../controllers/TodoController'

const router = Router();

const todoController = new TodoController();

router.post("/todo", todoController.create);

export { router }