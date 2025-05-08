import { TodoRepository } from '../../domain/repositories/TodoRepository';

export class DeleteTodoUseCase {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(id: string): Promise<void> {
    const todo = await this.todoRepository.findById(id);
    if (!todo) {
      throw new Error('Todo not found');
    }

    await this.todoRepository.delete(id);
  }
}
