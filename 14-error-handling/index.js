// 14-error-handling/index.js

/*
 * ✅ Topic: Error Handling Middleware in Express.js (ES6)
 *
 * Definition:
 * Error handling middleware in Express.js is defined with four parameters
 * (err, req, res, next). It catches and manages errors globally across the app.
 */

import express from 'express';

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Example route with a deliberate error
app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err); // Pass error to error-handling middleware
});

// Example route with async error
app.get('/async-error', async (req, res, next) => {
  try {
    throw new Error('Async error occurred!');
  } catch (err) {
    next(err); // Pass error to error handler
  }
});

// Normal working route
app.get('/', (req, res) => {
  res.send('Welcome! No errors here.');
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${err.message}`);

  // Default status code is 500 if not provided
  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message,
    // Include stack trace only in development
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
