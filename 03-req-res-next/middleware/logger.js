// 03-req-res-next/middleware/logger.js

/*
 * ✅ Logger Middleware Example
 * Demonstrates use of next()
 * Logs the method and URL of each request, then passes control to the next handler.
 */

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Move to next middleware/route handler
};

module.exports = logger;
