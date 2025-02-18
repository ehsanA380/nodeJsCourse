import net from 'node:net' 

const server = net.createServer((socket)=>{
    console.log('client connected: ',socket.remoteAddress)
    // console.log(socket.remoteAddress)
    // console.log(socket.remotePort)
    // console.log(socket.remoteFamily)
    socket.on('data',(chunk)=>{
        console.log(chunk.toString());
    })
    socket.write('server: got your message')
    // socket.end()
    socket.on('close',()=>{
        console.log(socket.remoteAddress,' :client disconnected')
    })
    socket.on('error',()=>{
        console.log('client Lost')
    })
})



server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on 3000')
})




// server.on('listening',()=>{
//     console.log('server started on 3000')
// })