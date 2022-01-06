import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { TodoRepositories } from '../repositories/TodoRepositories';

class TodoController {
    async create(request: Request, response: Response){
        const { description } = request.body

        const todoRepositories = getCustomRepository(TodoRepositories);

        if(!todoRepositories){
            throw new Error("preencha esse campo");
        }

        const data = {
            description
        }

        const todo = todoRepositories.create(data);

        await todoRepositories.save(todo);

        return response.status(201).json(todo);
    }

    async delete(request: Request, response:Response){
        const todoDelete = getCustomRepository(TodoRepositories);
        const { id } = request.params;
        const todoAlreadyExists = await todoDelete.findOne(id);
        if(todoAlreadyExists){
            todoDelete.remove(todoAlreadyExists);
            return response.status(200).json({ message: "apagado com sucesso" });
        }

        return response.status(400).json({ message: "Error" });
    }
}


export { TodoController }