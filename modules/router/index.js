const express = require('express');

const router = express.Router();

const accountRoutes = require('../account/routes');
const outletRoutes = require('../outlet/routes');
const mailRoutes = require('../mail/routes');

router.use('/account', accountRoutes);
router.use('/outlet', outletRoutes);
router.use('/mail', mailRoutes);

module.exports = router;
