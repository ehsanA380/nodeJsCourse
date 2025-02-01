import { time } from 'console';
import fs from 'fs'

// const writeStream = fs.createWriteStream('file.txt')

// writeStream.write('abc ')
// writeStream.write('ABC ')
// writeStream.write('123 ')
// console.log(writeStream.writableHighWaterMark)


console.time()
const readStream =  fs.createReadStream("D:\\movie\\webseries\\Farzi\\Farzi (2023) 720p HEVC HDRip Hindi S01 E04-E08 Complete Web Series x265 AAC ESubs.Mkv",{highWaterMark:1 * 1024 *1024});

// // const readStream =  fs.createReadStream("D:\\movie\\Pushpa 2 The Rule 2024 WEB-DL HQ 1080p Hindi [ORG DD 2.0] + Multi x264 AAC CineVood.mkv",{highWaterMark:100 * 1024 *1024});
const writeStream = fs.createWriteStream('stream.mp4');
readStream.on('data',(chunkBuffer)=>{
    // console.log(chunkBuffer)
    // Time  7s 
    // Memory 30 MB 
    // CPU 12% 
    // fs.appendFileSync('stream.mp4',chunkBuffer);
    // console.log(chunkBuffer.byteLength)
    // Time  3s 
    // Memory 1 GB 
    // CPU 20% 
    writeStream.write(chunkBuffer)
})
readStream.on('end',()=>{
    console.timeEnd()
})