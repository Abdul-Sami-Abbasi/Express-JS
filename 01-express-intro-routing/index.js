// index.js


// Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications. It simplifies the process of handling routes, HTTP requests/responses, middleware, and more.


// Import express
import express from "express";

// Create an app instance
const app = express();

// Port number
const PORT = 3000;

// GET route
app.get("/", (req, res) => {
  res.send("Welcome to Express.js!");
});

// Another GET route
app.get("/about", (req, res) => {
  res.send("This is the About Page.");
});

// POST route
app.post("/contact", (req, res) => {
  res.send("Form submitted!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
