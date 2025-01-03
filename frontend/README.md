# To Do application using FARM stack

## Introduction

The project is a sample application built on FARM stack. It is a simple to-do application providing users ability to create a to-do list.

## Goals & Features

### Goals

- Create a to-do application using FARM stack.
- Allow users to create to-do lists

### Key Features

- It allows performing CRUD operations on the to-do lists

## Tech Stack

- **Frontend:** React
- **Backend:** FastAPI
- **Database:** MongoDB
- **Others:** NA

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   pip install -r requirements.txt
   ```
3. Run the application:
   ```bash
   npm start
   # or
   uvicorn main:app --reload
   ```

## Operational Logic

- **Backend:**
  GET /api/lists : Retrieve all todo lists
  POST /api/lists : Create a new todo list
  GET /api/lists/{list_id} : Retrieve a todo list with all items
  DELETE /api/lists/{list_id} : Delete a specific todo list
  PUT /api/lists/{list_id} : Update the todo list
  POST /api/lists/{list_id}/items : Add a new item to a specific list
  PATCH /api/lists/{list_id}/checked_state : Update checked state
  DELETE /api/lists/{list_id}/{item_id} : Delete item from a list

- **Frontend:** Summarize the interaction between user inputs and application functionality.
- **Database:** Highlight key relationships or schemas, if applicable.
- **Core Logic:** Mention any specific algorithms or workflows powering the application.

## Contributing

1. Fork the repository.
2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License

MIT License

## Contact

nishant.guvvada@gmail.com

---
