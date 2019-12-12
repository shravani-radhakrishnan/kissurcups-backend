const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.post('/signUp', async (req, res, next) => {
  console.log('signUp');
  controllers.signUp(req.body).then((info) => {
    res.status(info.status).send(info.data);
  }).catch(next);
});

router.post('/login', async (req, res, next) => {
  console.log('login');
  controllers.login(req.body).then((info) => {
    // res.setHeader('x-access-token', info.data.data.token);
    res.status(info.status).send(info.data);
  }).catch(next);
});

router.post('/resetPassword', async (req, res, next) => {
  console.log('resetPassword');
  controllers.resetPassword(req.body).then((info) => {
    // res.setHeader('x-access-token', info.data.data.token);
    res.status(info.status).send(info.data);
  }).catch(next);
});

module.exports = router;
