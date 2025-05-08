import { Todo } from '../../domain/entities/Todo';
import { TodoRepository } from '../../domain/repositories/TodoRepository';

export interface CreateTodoDTO {
  title: string;
  description: string;
}

export class CreateTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(dto: CreateTodoDTO): Promise<Todo> {
    const todo = Todo.create(dto.title, dto.description);
    return this.todoRepository.save(todo);
  }
}
