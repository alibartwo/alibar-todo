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

## Deployment Plan

- Backend (Laravel) will be uploaded to `public_html/alibar-todo/`
- Frontend (Vue) will be built with `npm run build` and copied to `backend/public/todo-frontend/`
- SQLite database file (`database.sqlite`) will be deployed with the backend
- `.htaccess` rewrite will be used to route requests to Laravel's `public/` folder