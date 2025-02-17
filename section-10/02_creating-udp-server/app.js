import dgram from 'node:dgram' //UDP

const sockect = dgram.createSocket('udp4');

sockect.on('message',(a,b)=>{
    console.log('a: ',a.toString())
    console.log('b: ',b)
    sockect.close()
    
})
// sockect.on('listening',()=>{
//     // console.log(a,b)
//     console.log(sockect.address())
//     console.log('listening')
// })

// sockect.bind(3000,()=>{
//     // console.log(a,b)
//     console.log(sockect.address())
//     console.log('listening')
// });
sockect.send('hi form nodejs',4000, '192.168.29.50' ,(err,bytes)=>{
    // console.log(err,bytes)
    console.log('message sent')
})
// sockect.bind({port:4000},()=>{
//     // console.log(a,b)
//     console.log(sockect.address())
//     console.log('listening')
// });