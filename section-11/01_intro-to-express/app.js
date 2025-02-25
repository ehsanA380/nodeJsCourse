import express from 'express';

const app = express();

app.disable("x-powered-by")

app.get('/',(req,res)=>{
    // res.setHeader("Content-Type","text/html; charset=utf8")
    // res.end("hello world! 😊");
    res.send("hello world");
})

app.listen(3000,(err)=>{
    console.log(err)
    console.log('server started')
})