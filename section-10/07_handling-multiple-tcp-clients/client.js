import net from 'node:net';

const socket = net.createConnection({host:'192.168.29.50', port:3000})

socket.on('data',(chunk)=>{
    console.log(chunk.toString())
})
// socket.write('hii from client');

socket.on('error',()=>{
    console.log('server Lost')
})

// setTimeout(() => {
//     socket.end()
// }, 2000);
process.stdin.on('data',(input)=>{
    socket.write(input);
})


