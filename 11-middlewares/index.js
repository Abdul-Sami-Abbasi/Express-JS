// 11-middlewares/index.js

/*
 * ✅ Topic: Middlewares in Express.js (ES6)
 *
 * Definition:
 * A middleware in Express.js is a function that has access to req, res, and next.
 * It can execute code, modify requests/responses, and control the request-response cycle.
 */

import express from 'express';
import logger from './middleware/logger.js';

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Application-level middleware
app.use(logger);

// Route-level middleware example
const checkAuth = (req, res, next) => {
  const token = req.query.token;
  if (token === '12345') {
    next();
  } else {
    res.status(401).send('Unauthorized: Invalid Token');
  }
};

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Express App!');
});

// Route protected by middleware
app.get('/dashboard', checkAuth, (req, res) => {
  res.send('Welcome to your Dashboard!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
