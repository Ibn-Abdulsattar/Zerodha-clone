const express = require('express');
const router = express.Router();
const userController = require('../controllers/user')
const wrapAsync = require('../utility/wrapAsync');
const {validateUser, protect} = require('../middleware');


router.post('/signup', validateUser, wrapAsync(userController.signup));
router.post('/signin', wrapAsync(userController.signin));
router.post('/logout', protect, wrapAsync(userController.logout));


module.exports = router; 