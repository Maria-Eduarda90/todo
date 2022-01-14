import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { TodoRepositories } from '../repositories/TodoRepositories';
import * as Yup from 'yup';

class TodoController {
    async index (request: Request, response: Response){
        const todoRepositories = getCustomRepository(TodoRepositories);

        const todo = await todoRepositories.find();

        return response.json(todo);
    }

    async create(request: Request, response: Response){
        const { description } = request.body

        const todoRepositories = getCustomRepository(TodoRepositories);

        const data = {
            description
        }

        const schema = Yup.object().shape({
            description: Yup.string().required()
        })

        await schema.validate(data)

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