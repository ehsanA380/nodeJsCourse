import fs from 'fs/promises';
import http from 'http';

const server = http.createServer((req,res)=>{
    req.on('data',(chunk)=>{
        console.log(chunk.toString());
        fs.writeFile('textFromServer.txt',chunk)
    })
    res.setHeader("Content-Type","text/txt; charset:utf-8");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.end("Hello from Server");

})

server.listen(3000,()=>{
    console.log('Listening on port http://localhost:3000')
})