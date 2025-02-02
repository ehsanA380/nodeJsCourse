import fs, { read } from 'fs'

console.time()
const readStream = fs.createReadStream("D:\\movie\\Pathaan.2023.1080p.Hindi.HEVC.WEB-DL.5.1.ESub.x265-HDHub4u.Tv.mkv",{highWaterMark:1*1024*1024})

const writeStream = fs.createWriteStream('stream.mp4',{highWaterMark:1*1024*1024});
// readStream.on('data',(chunk)=>{
//     const isEmpty = writeStream.write(chunk)
//     if(!isEmpty){
//         readStream.pause();
//     }
// })
// writeStream.on('drain',()=>{
//     readStream.resume();
// })
writeStream.on('pipe',()=>{
    console.log('piped')
})
readStream.pipe(writeStream)
setTimeout(()=>{
    readStream.unpipe(writeStream);
},2000)
readStream.on('end',()=>{
    console.timeEnd()
})

writeStream.on('unpipe',()=>{
    console.log('unpiped')
})