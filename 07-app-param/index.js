// 07-app-param/index.js

/*
 * ✅ Topic: app.param() in Express.js
 *
 * Definition:
 * app.param() defines middleware for route parameters.
 * It executes automatically whenever the specified parameter appears in a route.
 *
 * Signature: app.param(name, (req, res, next, value) => {})
 */

import express from 'express';
const app = express();
const PORT = 3000;

// app.param middleware for "id"
app.param('id', (req, res, next, id) => {
  console.log(`Processing ID: ${id}`);

  // Validation example
  if (isNaN(id)) {
    return res.status(400).send('ID must be a number');
  }

  // Attaching validated ID to request object
  req.userId = Number(id);
  next();
});

// Route using :id
app.get('/users/:id', (req, res) => {
  res.send(`User Profile with ID: ${req.userId}`);
});

// Another route reusing the same app.param
app.get('/orders/:id', (req, res) => {
  res.send(`Order details for ID: ${req.userId}`);
});

// Optional: Different parameter
app.param('category', (req, res, next, category) => {
  console.log(`Category: ${category}`);
  req.categoryName = category.toUpperCase();
  next();
});

app.get('/products/:category', (req, res) => {
  res.send(`Products in Category: ${req.categoryName}`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
