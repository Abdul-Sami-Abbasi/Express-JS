// 08-controllers/index.js

/*
 * ✅ Topic: Controllers in Express.js
 *
 * Definition:
 * Controllers are functions that contain the logic for handling requests and responses.
 * They keep route files clean by separating business logic into dedicated modules.
 */

import express from 'express';
// Import controller functions
import { getAllUsers, getUserById } from './controllers/userController.js';


const app = express();
const PORT = 3000;


// Routes
app.get('/users', getAllUsers);
app.get('/users/:id', getUserById);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
