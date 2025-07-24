const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync');
const holdingController = require('../controllers/holding');


router.get('/allholdings', wrapAsync(holdingController.allHolding));

module.exports = router;
