const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

router.get('/search', catalogController.getSearchResults);
router.get('/book/:isbn13', catalogController.getBook)

module.exports = router;