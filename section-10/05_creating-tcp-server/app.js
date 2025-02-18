import net from 'node:net' 

const server = net.createServer()

server.on('connection',(socket)=>{
    console.log('client connected: ',socket.remoteAddress)
    // console.log(socket.remoteAddress)
    // console.log(socket.remotePort)
    // console.log(socket.remoteFamily)
    socket.on('data',(chunk)=>{
        console.log(chunk.toString());
        socket.write('http\n\ngot your message')
        socket.end()
    })
    socket.on('close',()=>{
        console.log(socket.remoteAddress,' :client disconnected')
    })
    // socket.write('\HTTP\n\n message received')
    // socket.end()
    
})


server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on 3000')
})




// server.on('listening',()=>{
//     console.log('server started on 3000')
// })