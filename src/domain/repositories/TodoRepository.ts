import { Todo } from '../entities/Todo';

export interface TodoRepository {
  save(todo: Todo): Promise<Todo>;
  findById(id: string): Promise<Todo | null>;
  findAll(): Promise<Todo[]>;
  delete(id: string): Promise<void>;
}
