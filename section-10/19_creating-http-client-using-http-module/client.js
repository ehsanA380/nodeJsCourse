import http from 'node:http';

const clientRequest = http.request({
    host:'192.168.29.50',
    port:3000,
    method:'post',
    path:'/app.js'
})

clientRequest.write('hi form client');
clientRequest.on('response',(response)=>{
    response.on('data',(chunk)=>{
        console.log(chunk.toString())
    })
})
