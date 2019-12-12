const express = require('express');

const router = express.Router();

const account = require('../account/routes');
const outlet = require('../outlet/routes');

router.use('/account', account);
router.use('/outlet', outlet);

module.exports = router;
