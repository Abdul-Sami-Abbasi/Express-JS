# 🚀 Express.js Bootcamp – From Basics to Advanced

![Node.js](https://img.shields.io/badge/Node.js-18.x-brightgreen?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-5.0-blue?style=for-the-badge&logo=express)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)

Welcome to my **Express.js Learning Journey**!  
This repository documents my step-by-step exploration of Express.js — one concept at a time.  
It’s designed both for my own revision and for future learners who want to understand Express.js in depth.

---

## 📌 Table of Contents
- [📂 Repository Structure](#-repository-structure)
- [📑 Chapters Covered](#-chapters-covered)
  - [Chapter 1: What is Express.js & Basic Routing](#chapter-1-what-is-expressjs--basic-routing)
  - [Chapter 2: Advanced Routing](#chapter-2-advanced-routing)
  - [Chapter 3: Request, Response & Next](#chapter-3-request-response--next)
  - [Chapter 4: approute](#chapter-4-approute)
  - [Chapter 5: Router in Express.js](#chapter-5-router-in-expressjs)
  - [Chapter 6: Route Parameters](#chapter-6-route-parameters)
  - [Chapter 7: appparam](#chapter-7-appparam)
  - [Chapter 8: Controllers in Express.js](#chapter-8-controllers-in-expressjs)
  - [Chapter 9: Query Strings](#chapter-9-query-strings)
  - [Chapter 10: Sending JSON from Backend to Frontend](#chapter-10-sending-json-from-backend-to-frontend)
  - [Chapter 11: Middlewares in Express.js](#chapter-11-middlewares-in-expressjs)
  - [Chapter 12: Serving Static Files](#chapter-12-serving-static-files)
  - [Chapter 13: Template Engines in Express.js](#chapter-13-template-engines-in-expressjs)
  - [Chapter 14: Error Handling Middleware](#chapter-14-error-handling-middleware)
- [⚙️ How to Run Examples](#️-how-to-run-examples)
- [🛠 Tools & Technologies](#-tools--technologies)
- [🎯 Goal](#-goal)

---

## 📂 Repository Structure

Each folder corresponds to a specific **chapter/topic**, with working code examples written in **ES6 import/export format**.


---

## 📑 Chapters Covered

### Chapter 1: What is Express.js & Basic Routing
- Definition of Express.js
- Setting up a simple server
- Handling GET & POST routes

---

### Chapter 2: Advanced Routing
- Route chaining (`app.route`)
- Handling multiple HTTP methods
- Grouping related routes

---

### Chapter 3: Request, Response & Next
- `req` (request) object properties
- `res` (response) object methods
- Role of `next()` in middleware flow

---

### Chapter 4: app.route()
- Cleaner syntax for defining routes
- Handling multiple actions for the same route path

---

### Chapter 5: Router in Express.js
- Creating modular routes
- Using `express.Router()`
- Structuring large applications

---

### Chapter 6: Route Parameters
- Defining dynamic routes using `:param`
- Accessing parameters via `req.params`

---

### Chapter 7: app.param()
- Middleware for route parameters
- Validation & preprocessing of parameters
- Avoiding repeated code in routes

---

### Chapter 8: Controllers in Express.js
- Separating route logic into controllers
- Creating modular and maintainable code
- Preparing for MVC architecture

---

### Chapter 9: Query Strings
- Using `req.query` to access query parameters
- Filtering, searching, and pagination
- Default values for query parameters

---

### Chapter 10: Sending JSON from Backend to Frontend
- Using `res.json()` for JSON responses
- Sending status codes with data
- Building the foundation of REST APIs

---

### Chapter 11: Middlewares in Express.js
- Definition and types of middleware:
  - Application-level
  - Route-level
  - Built-in
  - Error-handling
  - Third-party
- Using `next()` to control flow
- Example: Logger and authentication middleware

---

### Chapter 12: Serving Static Files
- Using `express.static()` middleware
- Hosting HTML, CSS, and JavaScript files
- Serving static assets with or without a virtual path

---

### Chapter 13: Template Engines in Express.js
- Rendering dynamic HTML with EJS
- Passing data from backend to views
- Using loops and conditionals inside templates

---

### Chapter 14: Error Handling Middleware
- Global error handler with `(err, req, res, next)`
- Handling sync & async errors
- Returning consistent error responses
- Environment-based stack trace handling

---

## ⚙️ How to Run Examples

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/expressjs-bootcamp.git
   cd expressjs-bootcamp

---

  ## 🛠 Tools & Technologies

- Node.JS
- Express.JS
- EJS (for template engine example)
- ES6 Modules

---

   ## 🎯 Goal

This repository will remain my Express.js revision source and a learning hub for beginners who want to master backend development step by step.

If you find it helpful, ⭐ the repo and share it with fellow learners!


