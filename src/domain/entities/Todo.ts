export class Todo {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly description: string,
    public readonly completed: boolean,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
  ) {}

  static create(title: string, description: string): Todo {
    const now = new Date();
    return new Todo(crypto.randomUUID(), title, description, false, now, now);
  }

  complete(): Todo {
    return new Todo(this.id, this.title, this.description, true, this.createdAt, new Date());
  }

  update(title: string, description: string): Todo {
    return new Todo(this.id, title, description, this.completed, this.createdAt, new Date());
  }
}
