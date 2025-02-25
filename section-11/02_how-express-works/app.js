import express from 'express';
import http from 'node:http'

const app = express();

app.disable("x-powered-by")

app.get('/',(req,res)=>{
    // res.setHeader("Content-Type","text/html; charset=utf8")
    // res.end("hello world! 😊");
    res.send("hello world");
})
app.get('/test',(req,res)=>{
    res.send("hello test");
})
// const server = http.createServer(app);
// server.listen(3000)

app.listen(3000,(err)=>{
    console.log(err)
    console.log('server started')
})