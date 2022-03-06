import { Request, Response } from 'express';
import { DeleteTodoServices } from "../services/DeleteTodoServices";

class DeleteTodoController {
    async delete(request: Request, response: Response){
        const { id } = request.params;

        const todoServices = new DeleteTodoServices();

        const todo = await todoServices.execute(id);

        return response.json(todo);
    }
}

export { DeleteTodoController }