import { Router } from 'express';
import { GetAllTodoController } from '../controllers/GetAllTodoController';
import { CreateTodoController } from '../controllers/CreateTodoController';
import { DeleteTodoController } from '../controllers/DeleteTodoController';

const router = Router();

router.get("/todo", new GetAllTodoController().index);
router.post("/todo", new CreateTodoController().create);
router.delete("/todo/:id", new DeleteTodoController().delete);

export { router }