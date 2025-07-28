// 05-router/routes/product.js

/*
 * ✅ Product Router
 * Handles routes starting with /products
 */

const express = require('express');
const router = express.Router();

// GET /products/
router.get('/', (req, res) => {
  res.send('All Products');
});

// GET /products/:id
router.get('/:id', (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

module.exports = router;
