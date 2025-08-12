const express = require('express');
const router = express.Router();
const {registerUser} = require('../../controllers/accountController');

// call the registerUser function in accountController.js
console.log('In register.js, calling registerUser');
router.post('/', registerUser);

module.exports = router;