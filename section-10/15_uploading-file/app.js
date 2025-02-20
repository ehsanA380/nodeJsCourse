import net from 'node:net';
import fs from 'node:fs';


const server = net.createServer(async(socket)=>{
    const writeStream = fs.createWriteStream('number.txt');
    socket.write('HTTP/1.0 200 OK\n\n');
    let count =0;
    socket.on('data',(chunk)=>{
        // console.log(chunk.toString())
        writeStream.write(chunk)
        console.log(++count)
        if(/WebKitFormBoundary.+--/.test(chunk.toString())){
            socket.end('got the data')
        }
    })
  

    //handling backpressure=========
    // readStream.on('data',(chunk)=>{
    //    socket.write(chunk);
    //    readStream.pause();
    //    setTimeout(() => {
    //     readStream.resume()
    //    }, 10);
    // })
    // socket.on('drain',()=>{
    //     readStream.resume()
    // })
    //===============================
    // socket.end();
    
});
server.on('connection',(socket)=>{
    console.log(socket.remoteAddress,' : client connected')
    socket.on('error',()=>{
        console.log(socket.remoteAddress," : client Disconnected")
    })
})

server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on port 3000')
})