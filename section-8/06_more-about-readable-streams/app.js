import fs from 'fs';

const readStream = fs.createReadStream('chars.txt',{highWaterMark:4,encoding:'utf-8'})

// readStream.setEncoding('utf-8');

readStream.on('data',(chunk)=>{
    console.log(chunk)
    // readStream.destroy('err')
    // readStream.destroy(new Error('e'))

})
// readStream.on('end',()=>{
//     console.log('end')
// })
// readStream.on('close',()=>{
//     console.log('closed')
// })
// readStream.on('open',(data)=>{
//     console.log('opened',data)
// })
// readStream.on('ready',(data)=>{
//     console.log('ready',data)
// })
// readStream.on('error',(error)=>{
//     console.log({error})
// })
// readStream.destroy()