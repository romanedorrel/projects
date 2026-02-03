Workout App Capstone

Overview
This project is a full-stack workout and meal tracking application built as a capstone project to demonstrate core application development concepts. The app allows users to create an account, authenticate securely, and manage workout and meal data through a structured, form-driven interface.

The focus of this project is on building a functional, maintainable application that demonstrates API usage, input validation, CRUD operations, and basic authentication flows.

Features
User authentication with signup, login, password reset, and account deletion
Create, view, and manage workouts
Create, view, and manage meals
Form handling with validation and error feedback
API routes for user and data operations
Persistent data storage using a database connection
Responsive layout with reusable UI components

Tech Stack
Frontend: Next.js (App Router), React, CSS Modules
Backend: Next.js API routes
Authentication: NextAuth
Database: MongoDB with Mongoose
Styling: CSS Modules
Tooling: Node.js, npm

Project Structure
/app – Application routes, layouts, and pages
/app/api – Backend API routes for authentication and data operations
/components – Reusable UI components and forms
/models – Mongoose schemas for application data
/lib – Database connection and shared utilities
/public – Static assets

Key Technical Concepts Demonstrated
Client and server separation using Next.js App Router
REST-style API routes for CRUD operations
Input validation and error handling on both client and server
Authentication and protected routes
Reusable component design
Clear separation of concerns across the codebase

Current Status
This project represents a stable, working version of the application. Ongoing improvements are planned to enhance validation, usability, and overall robustness, but the current version reflects a complete end-to-end implementation of the core features.

Getting Started
Clone the repository
Install dependencies:
  npm install
Configure environment variables for database and authentication
Run the development server:
  npm run dev

