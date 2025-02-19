import net from 'node:net';
import fs from 'node:fs';

const server = net.createServer((socket)=>{
    // const readStream = fs.createReadStream("C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\kaka.mp4");
    const readStream = fs.createReadStream("nums/numbers.txt");
    // const readStream = fs.createReadStream("nums/youtube-logo.png");
    console.log('clint conntected: ',socket.remoteAddress)
    socket.write('http\n\n')
    readStream.pipe(socket);
    // socket.end()
    readStream.on('end',()=>{
        console.log('file sent')
    })

    socket.on('close',()=>{
        console.log('cliet lost')
    })
});


server.listen(3000,'0.0.0.0',()=>{
    console.log('server started')
})