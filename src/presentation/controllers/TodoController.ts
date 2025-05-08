import { Request, Response } from 'express';
import { CreateTodoUseCase, CreateTodoDTO } from '../../application/use-cases/CreateTodo';
import { ListTodosUseCase } from '../../application/use-cases/ListTodos';
import { CompleteTodoUseCase } from '../../application/use-cases/CompleteTodo';
import { DeleteTodoUseCase } from '../../application/use-cases/DeleteTodo';

export class TodoController {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly listTodosUseCase: ListTodosUseCase,
    private readonly completeTodoUseCase: CompleteTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCase,
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const dto: CreateTodoDTO = {
        title: req.body.title,
        description: req.body.description,
      };

      const todo = await this.createTodoUseCase.execute(dto);
      res.status(201).json(todo);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const todos = await this.listTodosUseCase.execute();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  async complete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const todo = await this.completeTodoUseCase.execute(id);
      res.json(todo);
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      await this.deleteTodoUseCase.execute(id);
      res.status(204).send();
    } catch (error) {
      res.status(404).json({ error: (error as Error).message });
    }
  }
}
