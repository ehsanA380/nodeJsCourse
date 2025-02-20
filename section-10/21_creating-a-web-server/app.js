import http from "node:http";
import fs from "node:fs";

const server = http.createServer((request, response) =>{
  
  console.log(request.method)
  console.log(request.url)
  if(request.url='/'){
    const readStream = fs.createReadStream('index.html')
    readStream.on('data',(chunk)=>{
      response.write(chunk)
    })
    readStream.on('end',()=>{
      response.end()
    })
  }
  
})

server.listen(3000,'0.0.0.0',()=>{
  console.log('server started on port 3000')
})