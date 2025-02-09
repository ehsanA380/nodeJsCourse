const  http = require('http');
const resp = {
    message:'hello world',
    name:'ehsan ansari'
}
const server = http.createServer((req,res)=>{
res.writeHead(200, {"content-type":"application/json"});
res.end(JSON.stringify(resp))
console.log(req)
})
server.listen(80, () => {
  console.log('Server running on 3000');
  console.log(server.address())
})