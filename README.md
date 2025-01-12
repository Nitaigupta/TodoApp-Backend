Todo Backend API

A simple Todo backend API built with Node.js and Express.js that supports CRUD operations for managing Todo items.

Features

Create a Todo

Retrieve all Todos

Retrieve a specific Todo by ID

Update a Todo by ID

Delete a Todo by ID

Installation

Prerequisites

Ensure you have the following installed:

Node.js (v14 or higher)

npm or yarn

Steps

Clone the repository:

git clone <repository-url>

Navigate to the project directory:

cd <project-directory>

Install dependencies:

npm install

Start the server:

npm start

The server will start on http://localhost:3000 by default (unless otherwise configured).

API Endpoints

Base URL

http://localhost:3000

Routes

1. Create a Todo

POST /createTodo

Request Body:

{
  "title": "string",
  "description": "string",
  "status": "string" // e.g., "pending", "completed"
}

Response:

{
  "success": true,
  "message": "Todo created successfully",
  "data": { ... }
}

2. Get All Todos

GET /getTodos

Response:

{
  "success": true,
  "data": [ ... ]
}

3. Get Todo by ID

GET /getTodos/:id

Parameters:

id (string): The ID of the Todo item

Response:

{
  "success": true,
  "data": { ... }
}

4. Update a Todo by ID

PUT /updateTodo/:id

Parameters:

id (string): The ID of the Todo item

Request Body:

{
  "title": "string",
  "description": "string",
  "status": "string"
}

Response:

{
  "success": true,
  "message": "Todo updated successfully",
  "data": { ... }
}

5. Delete a Todo by ID

DELETE /deleteTodo/:id

Parameters:

id (string): The ID of the Todo item

Response:

{
  "success": true,
  "message": "Todo deleted successfully"
}

Project Structure

.
├── controllers
│   ├── createTodo.js
│   ├── getTodo.js
│   ├── getTodoById.js
│   ├── updateTodo.js
│   └── deleteTodo.js
├── routes
│   └── todoRoutes.js
├── app.js
└── package.json

controllers/: Contains the logic for each API endpoint.

routes/: Defines the API routes.

app.js: Main application entry point.

package.json: Project dependencies and scripts.

Dependencies

express: Web framework for Node.js

body-parser: Parses incoming request bodies (optional if using express.json())

nodemon: Development tool for automatically restarting the server (for local development)

Install dependencies:

npm install express body-parser

For development:

npm install --save-dev nodemon

Run in Development Mode

Use nodemon to restart the server automatically when code changes:

npx nodemon app.js

Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

License

This project is licensed under the MIT License.

Acknowledgments

Inspired by the need for simple backend APIs to manage Todos.
