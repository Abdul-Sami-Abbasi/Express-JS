// 09-query-strings/index.js

/*
 * ✅ Topic: Query Strings in Express.js (ES6)
 *
 * Definition:
 * Query strings are key-value pairs appended to the URL after a '?'. 
 * In Express.js, they are accessed using req.query and are useful for filtering,
 * searching, sorting, and pagination.
 */

import express from 'express';

const app = express();
const PORT = 3000;

// Example: Search with query string
// URL: http://localhost:3000/search?keyword=express&sort=asc
app.get('/search', (req, res) => {
  const { keyword, sort } = req.query;
  res.json({
    message: 'Search results',
    keyword: keyword || 'No keyword provided',
    sort: sort || 'No sort order provided'
  });
});

// Example: Pagination with query string
// URL: http://localhost:3000/posts?page=2&limit=5
app.get('/posts', (req, res) => {
  const { page = 1, limit = 10 } = req.query; // default values
  res.json({
    message: 'Posts retrieved',
    currentPage: page,
    limit: limit
  });
});

// Example: Handling multiple query params
// URL: http://localhost:3000/filter?category=books&author=ali
app.get('/filter', (req, res) => {
  res.json({
    filters: req.query
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
