// 06-route-params/index.js

/*
 * ✅ Topic: Route Parameters in Express.js
 *
 * Definition:
 * Route Parameters are named URL segments prefixed with a colon (:).
 * They make routes dynamic and can be accessed using req.params.
 */

import express from 'express';
const app = express();
const PORT = 3000;

// Single route parameter
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

// Multiple parameters
app.get('/posts/:postId/comments/:commentId', (req, res) => {
  res.send(`Post ID: ${req.params.postId}, Comment ID: ${req.params.commentId}`);
});

// Optional parameter
app.get('/hello/:name?', (req, res) => {
  const name = req.params.name || 'Guest';
  res.send(`Hello, ${name}!`);
});

// Using app.param for validation
app.param('id', (req, res, next, id) => {
  console.log(`Validating User ID: ${id}`);
  if (isNaN(id)) {
    return res.status(400).send('User ID must be a number');
  }
  next();
});

app.get('/profile/:id', (req, res) => {
  res.send(`Profile for User ID: ${req.params.id}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
