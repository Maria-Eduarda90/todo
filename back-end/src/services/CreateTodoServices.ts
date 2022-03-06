import { TodoRepositories } from '../repositories/TodoRepositories';
import { getCustomRepository } from 'typeorm';

class CreateTodoServices {
    async execute(description: string){
        const todoRepository = getCustomRepository(TodoRepositories);

        const todo = todoRepository.create({
            description
        });

        await todoRepository.save(todo);

        return todo;
    }
}

export { CreateTodoServices }