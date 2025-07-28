// 03-req-res-next/index.js

/*
 * ✅ Topic: Advanced req, res, and next in Express.js
 *
 * req (Request): Carries information about the client's request (params, query, body, headers).
 * res (Response): Used to send back data (text, JSON, files, redirects, etc.).
 * next (Next Function): Passes control to the next middleware/route handler in the stack.
 */

const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Custom logger middleware
app.use(logger);

// Example: Using req.query
app.get('/search', (req, res) => {
  res.send(`You searched for: ${req.query.q}`);
});

// Example: Using req.params
app.get('/user/:id', (req, res) => {
  res.json({ userId: req.params.id });
});

// Example: Using req.body
app.post('/login', (req, res) => {
  res.json({ username: req.body.username, message: 'Login successful!' });
});

// Example response methods
app.get('/download', (req, res) => {
  res.status(200).send('Pretend file download here');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
