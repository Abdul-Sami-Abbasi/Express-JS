// 05-router/routes/user.js

/*
 * ✅ User Router
 * Handles routes starting with /users
 */

const express = require('express');
const router = express.Router();

// GET /users/
router.get('/', (req, res) => {
  res.send('All Users');
});

// GET /users/:id
router.get('/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

module.exports = router;
