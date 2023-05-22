const router = require("express").Router();
const dot = require("dotenv").config();
const jwt = require("jsonwebtoken");

router.post('/list', (req,res)=>{
    const token = req.session.token;
    const key = process.env.KEY;
    jwt.verify(token, key, (err, decoded)=>{
        if(err){
            res.render('loginerr');
            res.send("토큰이 썩었거나 변조되었어요!")
        }
        else{
            res.render(decoded);
        }
    })
})

module.exports = router;