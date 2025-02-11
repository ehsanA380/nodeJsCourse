const http = require("http");
const { buffer } = require("stream/consumers");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end('{"message": "Hello, ProCodrrs!!!!!!"}');
  // console.log(req.method)
  // req.on('data',(chunk)=>{
  //   const data = chunk.toString();
    console.log(req.socket.remoteAddress)
    console.log(req.socket.address())
  //   console.log(JSON.parse(data))
  // })
//   const jsonString = '7b226d657373616765223a202248656c6c6f2c2050726f436f64727273212121212121227d';
// const jsonObject = JSON.parse(Buffer.from(jsonString, 'hex').toString('utf8'));

// console.log(Buffer.from(jsonString,'hex').toString());  // Output: "Hello, ProCodrrs!!!!!!"

});

server.listen(80, () => {
  console.log("HTTP server is running on http://localhost:80");
});
