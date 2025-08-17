const express = require('express');
const router = express.Router();
const registrarController = require('../controllers/registrarController');

router.post('/checkout', registrarController.checkoutBook);

module.exports = router;