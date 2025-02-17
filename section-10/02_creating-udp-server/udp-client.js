import dgram from 'node:dgram' //UDP

const sockect = dgram.createSocket('udp4');

sockect.on('message',(message,remoteAdrress)=>{
    console.log('a: ',message.toString())
    console.log('b: ',remoteAdrress)
    sockect.send(`message received successfully!`,remoteAdrress.port,remoteAdrress.address)
    
    // sockect.close()
})



// sockect.send('hi form laptop: nodejs',4000, '192.168.29.47' ,(err,bytes)=>{
//     console.log(err,bytes)
// })
sockect.bind({port:4000},()=>{
    // console.log(a,b)
    console.log(sockect.address())
    console.log('listening')
});