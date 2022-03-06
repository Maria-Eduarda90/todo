import { getCustomRepository } from 'typeorm';
import { TodoRepositories } from '../repositories/TodoRepositories';

class DeleteTodoServices {
    async execute(id: string){
        const deleteTodo =  getCustomRepository(TodoRepositories);  
        try  {
            await deleteTodo.delete(id);
        } catch (Error){
            return new Error("Error")
        }
    }
}

export { DeleteTodoServices }