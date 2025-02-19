import net from 'node:net';
import fs from 'node:fs';

const server = net.createServer((socket)=>{
    // const readStream = fs.createReadStream("C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\kaka.mp4");
    // const readStream = fs.createReadStream("nums/numbers.txt");
    const readStream = fs.createReadStream("nums/youtube-logo.png");
    console.log('clint conntected: ',socket.remoteAddress)
    // socket.write('http 203 thik hai\nAccess-Control-Allow-Origin:*\nAccess-Control-Expose-Headers:*\n\n')
    socket.write('HTTP/1.1\n')
    socket.write('Access-Control-Allow-Origin: *\n')
    socket.write('Access-Control-Expose-Headers: name,age\n')
    socket.write('Name: Ehsan\n')
    socket.write('Age: 22\n')
    socket.write('\n\n')
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