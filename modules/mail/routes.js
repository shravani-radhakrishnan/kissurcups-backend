const express = require('express');

const router = express.Router();
const controllers = require('./controllers');

router.post('/sendMail', async (req, res, next) => {
  console.log('sendMail');
  controllers.sendMail(req, res).then((info) => {
    console.log(res)
    res.status('200').send('success');
  }).catch(next);
});

module.exports = router;
