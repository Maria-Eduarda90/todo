import { Request, Response } from 'express';
import { CreateTodoServices } from "../services/CreateTodoServices";

class CreateTodoController {
    async create(request: Request, response: Response){
        const { description } = request.body;

        const todoServices = new CreateTodoServices();

        const todo = await todoServices.execute(description);

        return response.json(todo);
    }
}

export { CreateTodoController }