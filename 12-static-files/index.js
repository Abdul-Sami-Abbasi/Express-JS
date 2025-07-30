// 12-static-files/index.js

/*
 * ✅ Topic: Serving Static Files in Express.js (ES6)
 *
 * Definition:
 * Serving static files means delivering files like HTML, CSS, images, and client-side JavaScript
 * directly from a folder using express.static() middleware.
 */

import express from 'express';

const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static('public'));

// Example route to test alongside static files
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the Backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
