import express from 'express';
import cors from 'cors';
import { InMemoryTodoRepository } from './infrastructure/repositories/InMemoryTodoRepository';
import { CreateTodoUseCase } from './application/use-cases/CreateTodo';
import { ListTodosUseCase } from './application/use-cases/ListTodos';
import { CompleteTodoUseCase } from './application/use-cases/CompleteTodo';
import { DeleteTodoUseCase } from './application/use-cases/DeleteTodo';
import { TodoController } from './presentation/controllers/TodoController';
import { createTodoRoutes } from './presentation/routes/todoRoutes';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Dependency Injection
const todoRepository = new InMemoryTodoRepository();
const createTodoUseCase = new CreateTodoUseCase(todoRepository);
const listTodosUseCase = new ListTodosUseCase(todoRepository);
const completeTodoUseCase = new CompleteTodoUseCase(todoRepository);
const deleteTodoUseCase = new DeleteTodoUseCase(todoRepository);

const todoController = new TodoController(
  createTodoUseCase,
  listTodosUseCase,
  completeTodoUseCase,
  deleteTodoUseCase,
);

// Routes
app.use('/api/todos', createTodoRoutes(todoController));

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
