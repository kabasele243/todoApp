import { Todo } from '../Todo';

describe('Todo', () => {
  it('should create a new todo', () => {
    const todo = Todo.create('Test Todo', 'Test Description');

    expect(todo.title).toBe('Test Todo');
    expect(todo.description).toBe('Test Description');
    expect(todo.completed).toBe(false);
    expect(todo.id).toBeDefined();
    expect(todo.createdAt).toBeInstanceOf(Date);
    expect(todo.updatedAt).toBeInstanceOf(Date);
  });

  it('should complete a todo', () => {
    const todo = Todo.create('Test Todo', 'Test Description');
    const completedTodo = todo.complete();

    expect(completedTodo.completed).toBe(true);
    expect(completedTodo.id).toBe(todo.id);
    expect(completedTodo.title).toBe(todo.title);
    expect(completedTodo.description).toBe(todo.description);
    expect(completedTodo.createdAt).toBe(todo.createdAt);
    expect(completedTodo.updatedAt).not.toBe(todo.updatedAt);
  });

  it('should update a todo', () => {
    const todo = Todo.create('Test Todo', 'Test Description');
    const updatedTodo = todo.update('Updated Title', 'Updated Description');

    expect(updatedTodo.title).toBe('Updated Title');
    expect(updatedTodo.description).toBe('Updated Description');
    expect(updatedTodo.id).toBe(todo.id);
    expect(updatedTodo.completed).toBe(todo.completed);
    expect(updatedTodo.createdAt).toBe(todo.createdAt);
    expect(updatedTodo.updatedAt).not.toBe(todo.updatedAt);
  });
});
