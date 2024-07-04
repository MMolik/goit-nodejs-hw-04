const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/signupController'); // Import kontrolera

// Endpoint rejestracji użytkownika
router.post('/signup', signup);

module.exports = router;
