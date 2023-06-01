const express = require("express");
const app = express();

app.use('/', (req,res)=>{
    res.redirect('http://127.0.0.1:5502/intro.html')
})

app.listen(7777,()=>{
    console.log("서버열림")
})