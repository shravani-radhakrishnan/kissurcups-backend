const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.post('/signUp',async(req,res,next)=>{
    controllers.signUp(req.body).then((info)=>{
        res.status(info.status).send(info.data);
    }).catch(next);
})
router.post('/login'),async(req,res,next)=>{
    controllers.login(req.body).then((info)=>{
        // res.setHeader('x-access-token', info.data.data.token);
        res.status(info.status).send(info.data);
    }).catch(next);
}
module.exports =router;