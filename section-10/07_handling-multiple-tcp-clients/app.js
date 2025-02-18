import net from 'node:net' 

const clientList = [];
const clientData = []

const server = net.createServer((socket)=>{
    clientList.push(socket);
    // console.log(socket)
    clientList[clientList.length-1].write('enter your user name')
    socket.on('data',(chunk)=>{
        const user = chunk.toString();
        if(clientList.length > clientData.length){
          if(!(clientData.includes(user))){
            clientData.push(user);
            socket.write('logged in')
            console.log(clientData)

            }else{
            clientList[clientList.length-1].write('already exist!')
            }  
        }
        
        // console.log(clientData)
    })
    console.log(clientList.length)
    console.log('client connected: ',socket.remoteAddress,":",socket.remotePort)
    // console.log(socket.remoteAddress)
    // console.log(socket.remotePort)
    // console.log(socket.remoteFamily)
    clientList.forEach((socket,i)=>{
        socket.on('data',(chunk)=>{
            console.log(clientData[i], chunk.toString());
            // socket.write('server: got your message')
        }) 
    })
    
    // socket.on('data',(chunk)=>{
    //     console.log(chunk.toString());
    //     socket.write('server: got your message')
    // })
    // socket.end()
    socket.on('close',()=>{
        console.log(socket.remoteAddress,' :client disconnected')
    })
    socket.on('error',()=>{
        console.log('client Lost')
    })
})


process.stdin.on('data',(input)=>{
    const inputStr = input.toString();
    const [clientIndex] =inputStr.split(' ');
    // console.log(input.toString())
    // console.log(!isNaN(parseInt(clientIndex)))
    if(!isNaN(parseInt(clientIndex))){
        clientList[parseInt(clientIndex)].write(inputStr.substring(1).trim());
    }else{
        clientList.forEach((socket)=>{
        socket.write(input)
        })
    }
   
    
})


server.listen(3000,'0.0.0.0',()=>{
    console.log('server started on 3000')
})




// server.on('listening',()=>{
//     console.log('server started on 3000')
// })