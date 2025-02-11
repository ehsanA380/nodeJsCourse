const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end('{"message": "Hello, ProCodrrs!!!!!!"}');
  console.log(req.method)
  req.on('data',(chunk)=>{
    const data = chunk.toString();
    console.log(data)
    console.log(JSON.parse(data))
  })
});

server.listen(80, () => {
  console.log("HTTP server is running on http://localhost:80");
});
