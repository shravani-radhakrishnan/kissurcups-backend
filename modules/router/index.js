const express = require('express');

const router = express.Router();

const accountRoutes = require('../account/routes');
const outletRoutes = require('../outlet/routes');

router.use('/account', accountRoutes);
router.use('/outlet', outletRoutes);

module.exports = router;
