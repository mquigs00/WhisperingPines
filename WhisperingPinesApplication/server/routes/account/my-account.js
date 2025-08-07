const express = require('express');
const router = express.Router();
const {displayAccount} = require('../../controllers/accountController');

router.post('my-account', displayAccount);

module.exports = router;