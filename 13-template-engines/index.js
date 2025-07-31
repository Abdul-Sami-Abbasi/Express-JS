// 13-template-engines/index.js

/*
 * ✅ Topic: Template Engines in Express.js (ES6)
 *
 * Definition:
 * Template Engines generate dynamic HTML pages by combining templates with server-side data.
 * Example: EJS uses placeholders (<%= %>) that are replaced with actual values.
 */

import express from 'express';

const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Home route with dynamic data
app.get('/', (req, res) => {
  const user = { name: 'Sami', role: 'Student' };
  res.render('home', { user });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
