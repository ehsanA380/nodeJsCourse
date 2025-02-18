import net from 'node:net';
import fs from 'node:fs'

const socket =net.createConnection({host:'192.168.29.50',port:3000})
// const readStream = fs.createReadStream("C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\kaka.mp4");
// socket.write('hi');

process.stdin.on('data',(input)=>{


    if(input.toString().trim() == 'download'){
        const writeStream = fs.createWriteStream('kaka.mp4');
        socket.pipe(writeStream)
    }
    socket.write(input.toString());

    // // socket.on('data',(chunk)=>{
    //     // console.log(input.toString())
    //     if(input.toString().trim()==='send'){
    //         readStream.pipe(socket)
    //         // readStream.on('data',(chunk)=>{
    //             // socket.write(chunk)
    //         // })
    //         readStream.on('end',()=>{
    //             console.log('file ended')
    //         })
    //     }
    // // })
})


socket.on('error',()=>{
    console.log('server lost')
})