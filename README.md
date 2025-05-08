# Todo Application

A robust Todo application built with TypeScript using Clean Architecture principles. This application demonstrates best practices in software design, testing, and code organization.

## 🏗️ Architecture

The application follows Clean Architecture principles with the following layers:

- **Domain Layer**: Contains business entities and repository interfaces
- **Application Layer**: Contains use cases and business logic
- **Infrastructure Layer**: Contains implementations of repositories
- **Presentation Layer**: Contains controllers and routes

## 🚀 Features

- Create, read, update, and delete todos
- Mark todos as complete/incomplete
- RESTful API endpoints
- Clean Architecture implementation
- TypeScript for type safety
- Jest for testing
- ESLint and Prettier for code quality
- Husky for Git hooks

## 📋 Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The server will start on port 3000 by default. You can change this by setting the `PORT` environment variable.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

## 📝 API Endpoints

### Todos

- `GET /api/todos` - List all todos
- `POST /api/todos` - Create a new todo
  ```json
  {
    "title": "Todo title",
    "description": "Todo description"
  }
  ```
- `PUT /api/todos/:id/complete` - Mark a todo as complete
- `DELETE /api/todos/:id` - Delete a todo

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run lint` - Run linter
- `npm run format` - Format code

### Code Quality

The project uses:
- ESLint for code linting
- Prettier for code formatting
- Husky for Git hooks

Git hooks are configured to:
- Run linter and formatter before commits
- Run tests before commits and pushes

## 📦 Project Structure

```
src/
├── application/          # Application layer
│   └── use-cases/       # Use cases
├── domain/              # Domain layer
│   ├── entities/        # Business entities
│   └── repositories/    # Repository interfaces
├── infrastructure/      # Infrastructure layer
│   └── repositories/    # Repository implementations
└── presentation/        # Presentation layer
    ├── controllers/     # Controllers
    └── routes/         # Route definitions
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 