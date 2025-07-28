// 05-router/index.js

/*
 * ✅ Topic: Router in Express.js
 *
 * Definition:
 * Router in Express.js is a mini-application that handles its own routes and middleware.
 * It allows modular routing by splitting routes into separate files and mounting them in the main app.
 */

const express = require('express');
const app = express();
const PORT = 3000;

// Import routers
const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

// Mount routers
app.use('/users', userRouter);
app.use('/products', productRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
