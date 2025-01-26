# Express Todo List API

This project is a simple **To-Do List API** built using Node.js and Express. It allows users to create, read, update, and delete to-do tasks, with the ability to reset the entire list.

## Features

- **Create**: Add a new to-do item.
- **Read**: View the current list of to-do items.
- **Update**: Update an existing to-do item.
- **Delete**: Remove a specific to-do item.
- **Reset**: Reset the entire to-do list.

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [NPM](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/thearnabsaha/Express-Todo-List-API.git
   cd Express-Todo-List-API
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variable:

   ```env
   CORS_ORIGIN=http://localhost:3000
   ```

   Replace `http://localhost:3000` with your frontend or allowed origin.

4. Start the server:

   ```bash
   npm start
   ```

5. The API will run on `http://localhost:3000` by default.

## API Endpoints

### 1. Get To-Do List

**GET** `/`

Retrieves the current list of to-do items.

#### Response

- 200 OK: List of to-dos.

### 2. Add a To-Do

**POST** `/`

Adds a new to-do item.

#### Request Body

```json
{
  "todo": "Your task here"
}
```

#### Response

- 200 OK: "Todo Added Successfully"
- 200 OK: "Todo Already Exists"

### 3. Delete a To-Do

**DELETE** `/`

Deletes a specific to-do item.

#### Request Body

```json
{
  "todo": "Your task here"
}
```

#### Response

- 200 OK: "Todo Deleted Successfully"
- 200 OK: "No Such Todo Exists"

### 4. Update a To-Do

**PUT** `/`

Updates an existing to-do item.

#### Request Body

```json
{
  "todo": "Existing task",
  "newtodo": "Updated task"
}
```

#### Response

- 200 OK: "Todo Update Successfully"
- 200 OK: "No Such Todo Exists"
- 200 OK: "Todo Already Exists"

### 5. Reset To-Do List

**GET** `/reset`

Resets the to-do list to an empty state.

#### Response

- 200 OK: "Todos Resets Successfully"

## Project Structure

```plaintext
├── public/          # Static files (if any)
├── todo.json        # File for storing to-do data
├── index.js         # Main server file
├── package.json     # Project metadata and dependencies
├── .env             # Environment variables
```

## Dependencies

- **express**: Web framework for Node.js.
- **cors**: Middleware to enable CORS.
- **cookie-parser**: Middleware for parsing cookies.
- **dotenv**: Loads environment variables from `.env`.
- **nodemon**: Tool for running server during development.

## How to Contribute

1. Fork this repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add your message here"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request on GitHub.
