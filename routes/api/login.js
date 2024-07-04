const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

// Endpoint logowania użytkownika
router.post('/', loginController.login);

module.exports = router;
