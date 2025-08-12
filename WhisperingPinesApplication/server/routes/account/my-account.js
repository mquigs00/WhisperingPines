const express = require('express');
const router = express.Router();
const {displayAccount} = require('../../controllers/accountController');

router.get('my-account', displayAccount);

module.exports = router;