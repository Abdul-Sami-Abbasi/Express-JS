// 11-middlewares/middleware/logger.js

/*
 * ✅ Logger Middleware
 * Logs the method and URL of every incoming request.
 */

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // pass control to next middleware
};

export default logger;
