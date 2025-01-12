# Todo Backend API

A simple backend API for managing Todo items built with Node.js and Express.js.

## Features
- Create a Todo
- Get all Todos
- Get a Todo by ID
- Update a Todo by ID
- Delete a Todo by ID

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

- **POST** `/createTodo` - Create a new Todo
- **GET** `/getTodos` - Get all Todos
- **GET** `/getTodos/:id` - Get a Todo by ID
- **PUT** `/updateTodo/:id` - Update a Todo by ID
- **DELETE** `/deleteTodo/:id` - Delete a Todo by ID

## Project Structure
```
.
├── controllers
├── routes
├── app.js
└── package.json
```

## Run in Development
Use nodemon for automatic server restarts:
```bash
npx nodemon app.js
```
