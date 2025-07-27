
// 02-advanced-routing/routes/user.js

import express from 'express'
const router = express.Router();

// Route: /users/
router.get('/', (req, res) => {
  res.send('All Users');
});

// Route: /users/:id
router.get('/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
