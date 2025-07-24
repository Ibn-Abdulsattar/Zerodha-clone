const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync');
const withdrawController = require('../controllers/withdraw');
const {validateWithdraw} = require('../middleware');

router.post('/withdraw', validateWithdraw, wrapAsync(withdrawController.withdraw));

module.exports = router;

