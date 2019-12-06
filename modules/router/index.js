const express = require('express');

const router = express.Router();

const account = require('../account/routes');

router.use('/account', account);

module.exports = router;