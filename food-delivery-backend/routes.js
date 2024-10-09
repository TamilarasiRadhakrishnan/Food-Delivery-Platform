const express = require('express');
const { registerUser, getUsers } = require('../controllers/userController');
const router = express.Router();

// Routes
router.post('/register', registerUser);
router.get('/', getUsers);

module.exports = router;
