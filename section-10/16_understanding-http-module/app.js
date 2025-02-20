import http from 'node:http';

const server = http.createServer((req,res)=>{
    console.log(req.headers)
    console.log(req.url)
    console.log(req.method)
    res.setHeader("Content-Length","23")
    res.setHeader("Access-Control-Allow-Origin","*")
    res.write('hello form http server.')
    req.on('data',(chunk)=>{
        console.log('got the request')
        console.log(chunk.toString());
    })
    // res.end()
    // console.log(req)
});

// server.on('connection',(socket)=>{
//     // console.log(socket)
//     socket.on('data',(chunk)=>{
//         console.log(chunk.toString())
//     })
//     socket.end('HTTP 200 ok\n\n hi')
// });
// server.on('request',(req,res)=>{
//     console.log('got the request')
//     console.log(req.url)
//     res.setHeader("Content-Length","23")
//     res.write('hello form http server.')
//     req.on('data',(chunk)=>{
//         console.log(chunk.toString())
//     })
//     // res.end()
//     // console.log(req)
// })
// server.on('connection',(socket)=>{
//     socket.on('data',(chunk)=>{
//         console.log(chunk.toString())
//     })
// })


server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})