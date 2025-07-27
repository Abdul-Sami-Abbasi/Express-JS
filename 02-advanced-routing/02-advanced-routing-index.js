
// 02-advanced-routing/index.js

/*
 * ✅ Advanced Routing in Express.js
 * Includes route parameters, route chaining, and modular routing.
 */

import express from 'express'
const app = express();
const PORT = 3000;

// Route Parameter Example
app.get('/user/:id', (req, res) => {
  res.send(`User ID is ${req.params.id}`);
});

// Multiple Parameters Example
app.get('/post/:postId/comment/:commentId', (req, res) => {
  res.send(`Post: ${req.params.postId}, Comment: ${req.params.commentId}`);
});

// Route Chaining Example
app.route('/book')
  .get((req, res) => res.send('Get a book'))
  .post((req, res) => res.send('Add a book'))
  .put((req, res) => res.send('Update the book'));

// Modular Routes (Separate File)
import userRoutes from './routes/user';
app.use('/users', userRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
