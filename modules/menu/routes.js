const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.post('/getNotification', async (req, res, next) => {
  controllers.getUserNotification(req.body).then((info) => {
    res.status(info.status).send(info.data);
  }).catch(next);
});

router.post('/getSetAlarm', async (req, res, next) => {
  controllers.getSetAlarm(req.body).then((info) => {
    res.status(info.status).send(info.data);
  }).catch(next);
});

router.post('/getPopNotification', async (req, res, next) => {
  controllers.getPopNotification(req.body).then((info) => {
    res.status(info.status).send(info.data);
  }).catch(next);
});
