const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.post('/outletQRCode', async (req, res, next) => {
  console.log('outlet');
  controllers.outletQRCode(req.body).then((info) => {
    res.status(info.status).send(info.data);
  })
    .catch(next);
});

router.post('/getOutlets', async (req, res, next) => {
  controllers.getOutletDetails(req.body).then((info) => {
    res.status(info.status).send(info.data);
  })
    .catch(next);
});

router.post('/getOutletTables', async (req, res, next) => {
  controllers.getOutletTables(req.body).then((info) => {
    res.status(info.status).send(info.data);
  })
    .catch(next);
});

module.exports = router;
