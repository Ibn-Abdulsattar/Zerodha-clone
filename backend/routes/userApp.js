const express = require('express');
const router = express.Router();
const wrapAsync = require('../utility/wrapAsync');
const userAppController = require('../controllers/userApp');
const {validateUserApp, validateToggleUserApp} = require('../middleware');


router.get('/user-apps', wrapAsync(userAppController.allUserApp));

router.post('/user-apps/connect', validateToggleUserApp, wrapAsync(userAppController.connectedApp));

router.post('/user-apps/disconnect', validateToggleUserApp, wrapAsync(userAppController.disconnectApp));


module.exports = router;
