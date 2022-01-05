import { EntityRepository, Repository } from 'typeorm';
import { Todo } from '../entity/Todo';

@EntityRepository(Todo)
class TodoRepositories extends Repository<Todo>{}

export { TodoRepositories }