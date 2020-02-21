const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.get('/getFile', async (req, res, next) => {
  controllers.convertToJson(req.body).then((info) => {
    res.status(info.status).send(info.data)
  }).catch(next);
});
module.exports = router;
