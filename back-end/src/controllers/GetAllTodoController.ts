import { Request, Response } from 'express';
import { GetAllTodoServices } from "../services/GetAllTodoServices";

class GetAllTodoController {
    async index(request: Request, response: Response){
        
        const todoService = new GetAllTodoServices();

        const todo = await todoService.execute();

        return response.json(todo);
    }
}

export { GetAllTodoController }