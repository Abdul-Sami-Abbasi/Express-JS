// 10-send-json/index.js

/*
 * ✅ Topic: Sending JSON Data from Backend to Frontend (ES6)
 *
 * Definition:
 * In Express.js, res.json() is used to send JSON responses from the backend to the frontend.
 * This is the standard way to build APIs that frontends can consume.
 */

import express from 'express';

const app = express();
const PORT = 3000;

// Fake users database
const users = [
  { id: 1, name: 'Ali', role: 'Admin' },
  { id: 2, name: 'Sami', role: 'User' },
  { id: 3, name: 'Tushal', role: 'Moderator' }
];

// Basic JSON response
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Sending a single user by ID with status code
app.get('/api/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.status(200).json(user);
});

// Example of sending extra metadata
app.get('/api/info', (req, res) => {
  res.json({
    success: true,
    message: 'API is working fine',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
