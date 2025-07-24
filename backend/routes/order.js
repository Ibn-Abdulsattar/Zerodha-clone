const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync');
const {validateOrder} = require('../middleware')
const orderController = require('../controllers/order');

router.post('/createOrder', validateOrder, wrapAsync(orderController.createOrder));

router.get('/allorders', wrapAsync(orderController.allOrder));


module.exports = router;
