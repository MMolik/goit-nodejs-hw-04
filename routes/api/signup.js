const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');

// Endpoint rejestracji użytkownika
router.post('/', signupController.signup);

module.exports = router;
