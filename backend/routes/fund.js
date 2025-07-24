const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync');
const fundController = require('../controllers/fund');
const {validateFund} = require('../middleware');

router.post('/createFund', wrapAsync(fundController.createFund));

router.get('/allFund', validateFund, wrapAsync(fundController.latestFund));

module.exports = router;