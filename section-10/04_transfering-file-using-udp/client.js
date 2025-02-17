import dgram from 'node:dgram' //udp
import fs from 'node:fs'
const writeSteam = fs.createWriteStream('f/lakh.txt');
const socket = dgram.createSocket('udp4');

socket.on('message',(message,remoteAddress)=>{
    // console.log(message.toString())
    writeSteam.write(message)
    // console.log('message receive')
})

socket.bind({port:4000},'192.168.29.50')