import { TodoRepositories } from '../repositories/TodoRepositories';
import { getCustomRepository } from 'typeorm';

class GetAllTodoServices {
    async execute(){
        const todoRepository = getCustomRepository(TodoRepositories);

        const todo = await todoRepository.find();

        return todo;
    }
}

export { GetAllTodoServices }