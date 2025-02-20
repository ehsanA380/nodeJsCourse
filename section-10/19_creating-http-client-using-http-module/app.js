import http from 'node:http';

const server = http.createServer((req,res)=>{
  res.write('hi form http server');
  res.end();
  console.log('got the request')
  console.log(req.url)
  console.log(req.method)
  console.log(req.headers)
  req.on('data',(chunk)=>{
    console.log(chunk.toString())
  })
})


server.listen(3000,'0.0.0.0',()=>{
  console.log('server started on port 3000')
})