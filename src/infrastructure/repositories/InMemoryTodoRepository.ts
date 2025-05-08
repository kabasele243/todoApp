import { Todo } from '../../domain/entities/Todo';
import { TodoRepository } from '../../domain/repositories/TodoRepository';

export class InMemoryTodoRepository implements TodoRepository {
  private todos: Map<string, Todo> = new Map();

  async save(todo: Todo): Promise<Todo> {
    this.todos.set(todo.id, todo);
    return todo;
  }

  async findById(id: string): Promise<Todo | null> {
    return this.todos.get(id) || null;
  }

  async findAll(): Promise<Todo[]> {
    return Array.from(this.todos.values());
  }

  async delete(id: string): Promise<void> {
    this.todos.delete(id);
  }
}
