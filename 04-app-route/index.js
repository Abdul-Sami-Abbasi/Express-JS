// 04-app-route/index.js

/*
 * ✅ Topic: app.route() in Express.js
 *
 * Definition:
 * app.route() allows you to chain multiple HTTP method handlers
 * for the same route path, keeping code cleaner and organized.
 */

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Using app.route()
app.route('/book')
  .get((req, res) => {
    res.send('Retrieve a book');
  })
  .post((req, res) => {
    res.send('Add a new book');
  })
  .put((req, res) => {
    res.send('Update an existing book');
  })
  .delete((req, res) => {
    res.send('Delete a book');
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
