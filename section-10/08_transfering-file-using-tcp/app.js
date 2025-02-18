import net from 'node:net';
import fs from 'node:fs';

const readStream = fs.createReadStream("C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\kaka.mp4");
const server = net.createServer((socket)=>{
    console.log('clint conntected: ',socket.remoteAddress)
    // const writeStream = fs.createWriteStream('song.mp4');
    socket.on('data',(chunk)=>{
        // console.log('get data')
        // writeStream.write(chunk)
        // console.dir(chunk.toString())

        if(chunk.toString().trim()=='download'){
            readStream.pipe(socket);
        }
    })
    readStream.on('end',()=>{
        console.log('file end')
    })
    
    
    // socket.write('server: got you msg!')


    socket.on('error',()=>{
        console.log('cliet lost')
    })
});


server.listen(3000,'0.0.0.0',()=>{
    console.log('server started')
})