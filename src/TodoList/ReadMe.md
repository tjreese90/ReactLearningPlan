##React Todo List with Mock API
Overview
This project is a simple and fully-functional todo list built with React. It supports adding, marking as complete, deleting, and sorting todos. Additionally, data is persisted locally and via a mock API, simulating interactions with a backend service.

##Features
Add Todos: Users can add new todo items to the list.
Complete Todos: Clicking on a todo will toggle its "completed" state.
Persistent Storage: The todo list is saved and loaded from local storage.
Mock API Integration: Todo items are fetched from and saved to a mock API for simulation of server-side operations.
Automatic Sorting: Completed todos sink to the bottom of the list automatically.
Delete Todos: Users can remove todos from the list.
Stretch Goals (Optional Enhancements)
Timestamps: Hidden timestamps (created_at, completed_at) for todos will be used for sorting.
Active todos will be sorted by created_at (newest first).
Completed todos will be sorted by completed_at (oldest first).
Mock API
The mock API simulates server-side interactions. All CRUD operations (Create, Read, Update, Delete) are handled using this mock API. The app will first load todos from the API, and all subsequent actions like adding, completing, or deleting todos will also reflect on the mock API.

##Endpoints
GET /todos: Fetch all todos.
POST /todos: Add a new todo.
PUT /todos/:id: Update an existing todo (mark complete, update text).
DELETE

##Requirements
Toggle "Checked" State

Clicking on a todo item toggles its "completed" state, both in the local UI and the mock API.
Local Storage & Mock API

Todo list data is stored in local storage and synced with the mock API.
Auto-Sort Completed Items

Completed todos will automatically move to the bottom of the list.
Stretch Goals
Delete Todos

When hovering over a todo, an "X" icon should appear. Clicking it removes the todo, both locally and from the mock API.
Hidden Timestamps

Each todo should have a hidden created_at timestamp, and a completed_at timestamp when it is marked as complete.
Sorting

Active todos sorted by created_at (newest first).
Completed todos sorted by completed_at (oldest first).
