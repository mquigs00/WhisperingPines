const express = require('express');
const router = express.Router();

router.use('/register', require('./register'));                             // route to the register route in register.js
router.use('/login', require('./login'));
router.use('/my-account', require('./my-account'));

module.exports = router;