import fs from 'fs'
import { pipeline } from 'stream';

// const readStream = fs.createReadStream("D:\\movie\\Pathaan.2023.1080p.Hindi.HEVC.WEB-DL.5.1.ESub.x265-HDHub4u.Tv.mkv",{highWaterMark:1*1024*1024})
// const writeStream = fs.createWriteStream('stream.mp4',{highWaterMark:1*1024*1024})
const readStream = fs.createReadStream("D:\\software\\ubuntu-24.04.1-desktop-amd64.iso",{highWaterMark:1*1024*1024*100})
const writeStream = fs.createWriteStream('F:\\ubuntu-24.04.1-desktop-amd64.iso',{highWaterMark:1*1024*1024*100})

readStream.pipe(writeStream);
readStream.on('error',(err)=>{
    console.log(err)
})

// pipeline(readStream,writeStream,(err)=>{
//     console.log(err)
// })

// setTimeout(() => {
//     readStream.destroy('khatam')
// }, 2000);