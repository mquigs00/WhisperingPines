const express = require('express');
const router = express.Router();
const accountController = require('../../controllers/accountController');

router.post('/login', accountController.loginUser);
router.post('/register', accountController.registerUser);
router.get('/my-account', accountController.displayAccount);

module.exports = router;