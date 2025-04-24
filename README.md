# alibar-todo

A simple full-stack Todo application built with **Laravel 12 (API)** and **Vue 3 (Frontend SPA)** using a clean mono-repo structure. The goal is to demonstrate structured thinking, clean code practices, and deployment capabilities for a job interview project.

## Purpose

This project showcases a complete task management application with a frontend built in Vue 3 and a backend powered by Laravel 12 and SQLite, using RESTful APIs.


## Tech Stack

| Layer       | Technology        | Description                          |
|-------------|-------------------|--------------------------------------|
| Frontend    | Vue 3 + Vite      | Modern reactive UI                   |
| Backend     | Laravel 12        | REST API with SQLite or MySQL DB     |
| Database    | SQLite              | Lightweight file-based DB for simplicity |
| UI Framework| Tailwind CSS  | Fast and responsive styling    |
| HTTP Client | Axios             | API communication                    |
| Version Control | Git + GitHub  | Source control                       |

## Features (MVP)

-  Add, update, delete todos
-  Toggle complete/incomplete
-  List all todos
-  Sort by creation date
-  Filter by status (all / active / completed)
-  Input validation and basic error handling

## Quick Start with Docker

To quickly spin up the project using Docker:

```bash
git clone https://github.com/alibartwo/alibar-todo.git
cd alibar-todo
docker compose up --build
```

The frontend will be available at `http://localhost:5173` and the API at `http://localhost:8000/api/todos`.


## Local Development

### Prerequisites

- Node.js (v18+ recommended)
- PHP (v8.1+)
- Composer
- SQLite

### Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/alibartwo/alibar-todo.git
   cd alibar-todo
   ```

2. **Install frontend dependencies and start dev server**  
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

3. **Install backend dependencies**  
   ```bash
   cd ../backend
   composer install
   cp .env.example .env
   php artisan key:generate
   ```

4. **Database setup (optional)**  
   The project includes a default `database/database.sqlite` file.  
   To reset or start fresh:
   ```bash
   rm database/database.sqlite
   touch database/database.sqlite
   php artisan migrate
   ```

5. **Start the Laravel server**  
   ```bash
   php artisan serve
   ```

Visit the frontend at `http://localhost:5173` and the API at `http://127.0.0.1:8000/api/todos`.