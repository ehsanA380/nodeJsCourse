import dgram from 'node:dgram' //udp
import fs from 'fs'

const readStream = fs.createReadStream('nums/numbers.txt',{highWaterMark:1000});
const socket = dgram.createSocket('udp4');

readStream.on('data',(chunk)=>{
    socket.send(chunk,4000,'192.168.29.50')
})
readStream.on('end',()=>{
    console.log('message sent')
})


// socket.send(' ',4000,'192.168.29.50',()=>{
//     console.log('message sent')
// })