Here is a complete README.md file suitable for your GitHub repository for Assignment 1, based on the provided document.

-----

# Home Assignment 1: Basic Task Manager

[cite\_start]This project is a simple full-stack application built to evaluate fundamental development skills[cite: 6]. [cite\_start]The goal is to create a basic task manager using C\# (.NET 8) for the backend API and React with TypeScript for the frontend client[cite: 7].

[cite\_start]This assignment is worth **10 credits**[cite: 5].

## ✨ Features

  * [cite\_start]Display the current list of tasks [cite: 9]
  * [cite\_start]Add a new task with a description [cite: 10]
  * [cite\_start]Mark tasks as completed or uncompleted [cite: 11]
  * [cite\_start]Delete tasks from the list [cite: 12]

-----

## 💻 Tech Stack

### [cite\_start]Backend (C\# .NET 8) [cite: 13]

  * [cite\_start]**Framework:** .NET 8 Core [cite: 14]
  * [cite\_start]**Architecture:** RESTful API [cite: 14]
  * [cite\_start]**Data Storage:** In-memory data storage (no database required) [cite: 15]
  * **Data Model:** The `TaskItem` class includes:
      * `public Guid Id { get; set; [cite_start]}` [cite: 18]
      * `public string Description { get; set; [cite_start]}` [cite: 19]
      * `public bool IsCompleted { get; set; [cite_start]}` [cite: 20]

### [cite\_start]Frontend (React + TypeScript) [cite: 28]

  * [cite\_start]**Library:** React (as a single-page application) [cite: 29]
  * [cite\_start]**Language:** TypeScript [cite: 7]
  * [cite\_start]**State Management:** React Hooks [cite: 36]
  * [cite\_start]**API Client:** Axios or Fetch [cite: 35]

-----

## 🚀 API Endpoints

The backend exposes the following RESTful endpoints:

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/tasks` | [cite\_start]Retrieves all tasks. [cite: 24] |
| `POST` | `/api/tasks` | [cite\_start]Adds a new task. [cite: 25] |
| `PUT` | `/api/tasks/{id}` | [cite\_start]Updates a specific task (e.g., toggles completion). [cite: 26] |
| `DELETE` | `/api/tasks/{id}` | [cite\_start]Deletes a specific task. [cite: 27] |

-----

## 🛠️ Getting Started

To run this project locally, you will need to run both the backend API and the frontend client.

### Prerequisites

  * [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
  * [Node.js](https://nodejs.org/) (which includes npm)

### Backend

1.  Clone the repository.
2.  Navigate to the backend solution/project directory.
3.  Restore the .NET dependencies:
    ```bash
    dotnet restore
    ```
4.  Run the application:
    ```bash
    dotnet run
    ```
5.  The API will now be running (typically on `http://localhost:5000` or `https://localhost:7001`).

### Frontend

1.  In a new terminal, navigate to the frontend project directory.
2.  Install the Node.js dependencies:
    ```bash
    npm install
    ```
3.  Start the React development server:
    ```bash
    npm start
    ```
4.  The application will open automatically in your browser (typically at `http://localhost:3000`).

-----

## 🌟 Enhancements

This project also implements the following optional enhancements:

  * [cite\_start]**Task Filtering:** Users can filter the task list by **All**, **Completed**, and **Active** (uncompleted) states[cite: 40].
  * [cite\_start]**Styling:** A basic, clean design has been applied using a framework like **Bootstrap** or **Tailwind**[cite: 41].
  * [cite\_start]**Local Persistence:** Tasks are saved in the browser's `localStorage` to ensure data persists even after a page refresh[cite: 42].

-----
