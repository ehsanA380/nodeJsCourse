import net from 'node:net';
import fs, { read } from 'node:fs';
import { open } from 'node:fs/promises';

// const readStream = fs.createReadStream ('nums/num.txt');
// const readStream = fs.createReadStream ('nums/numbers.txt');
// const readStream = fs.createReadStream("C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\kaka.mp4");
const server = net.createServer(async(socket)=>{
    // const fileHandle = await open('nums/num.txt');
    const fileHandle = await open('nums/numbers.txt');
    // const fileHandle = await open('tcs.pdf');
    // const fileHandle = await open('C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\kaka.mp4');
    const readStream = fileHandle.createReadStream({highWaterMark:40});
    const {size}=await fileHandle.stat()
    // console.log(size)
    //header data to sent
    socket.write('HTTP/1.0 200 OK\n');
    socket.write('Access-Control-Allow-Origin: *\n');
    // socket.write('Access-Control-Expose-Headers: *\n');
    socket.write('Content-Type: text/txt; charset=utf-8  \n');
    // socket.write('Content-Type: video/mp4\n');
    // socket.write('Content-Type: application/pdf\n');
    socket.write(`Content-Length: ${size}\n`);
    // socket.write(`Content-Disposition: Attachment;filename=kakasong.mp4\n`);
    // socket.write('name: Ehsan');
    socket.write('\n\n');
    //actual data to sent
    // socket.write('hi form server');
    // readStream.pipe(socket)
    readStream.on('data',(chunk)=>{
        socket.write(chunk)
        readStream.pause();
        setTimeout(() => {
            readStream.resume();
        }, 30);
    })

    readStream.on('pause',()=>{
        console.log('pause by browser')
    })
    readStream.on('resume',()=>{
        console.log('resume by browser')
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
    readStream.on('end',()=>{
        console.log('file sent')
    })
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
