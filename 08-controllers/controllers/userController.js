// 08-controllers/controllers/userController.js

/*
 * ✅ User Controller (ES6)
 * Contains the logic for handling user-related routes.
 */

// Fake data for demonstration
const users = [
  { id: 57, name: 'prem' },
  { id: 75, name: 'Sami' },
  { id: 11, name: 'Tushal' }
];

// Controller: Get all users
export const getAllUsers = (req, res) => {
  res.json(users);
};

// Controller: Get user by ID
export const getUserById = (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
};
