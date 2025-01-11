const http = require('http');

const server =  http.createServer((req,res)=>{
    console.log(req);
    
    res.end('Hello form Node.js Server; Hii bro');
})

server.listen(3000);