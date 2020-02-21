const express = require('express');

const router = express.Router();

const accountRoutes = require('../account/routes');
const outletRoutes = require('../outlet/routes');
const mailRoutes = require('../mail/routes');
const notificationRoutes = require('../notification/routes');
const menuToJsonRoutes = require('../excelToJSON/routes');

router.use('/account', accountRoutes);
router.use('/outlet', outletRoutes);
router.use('/mail', mailRoutes);
router.use('/notification', notificationRoutes);
router.use('/menuUpload', menuToJsonRoutes);

module.exports = router;
