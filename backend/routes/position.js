const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync');
const positionController = require('../controllers/position');


router.get('/allpositions', wrapAsync(positionController.allPositions));


module.exports = router;
