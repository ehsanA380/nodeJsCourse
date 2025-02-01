import fs from 'fs';
import { exit } from 'process';
// import fs from 'fs/promises';
// console.time()

// Time  1.50s 
// Memory 1331 MB 
// CPU 1.4% 
// const fileBuff = await fs.readFile("chars.txt");
// const fileBuff = await fs.readFile("D:\\movie\\Pathaan.2023.1080p.Hindi.HEVC.WEB-DL.5.1.ESub.x265-HDHub4u.Tv.mkv");
// const fileBuff = await fs.readFile("D:\\movie\\webseries\\Farzi\\Farzi (2023) 720p HEVC HDRip Hindi S01 E04-E08 Complete Web Series x265 AAC ESubs.Mkv");

// Time  7s 
// Memory 30 MB 
// CPU 12% 
const readStream =  fs.createReadStream("D:\\movie\\webseries\\Farzi\\Farzi (2023) 720p HEVC HDRip Hindi S01 E04-E08 Complete Web Series x265 AAC ESubs.Mkv",{highWaterMark:1 * 1024 *1024});
// // const readStream =  fs.createReadStream("D:\\movie\\Pushpa 2 The Rule 2024 WEB-DL HQ 1080p Hindi [ORG DD 2.0] + Multi x264 AAC CineVood.mkv",{highWaterMark:100 * 1024 *1024});

// readStream.on('data',(chunkBuffer)=>{
//     // console.log(chunkBuffer)
//     fs.appendFileSync('pushpa2.mp4',chunkBuffer);
//     // console.log(chunkBuffer.byteLength)
//     if(chunkBuffer.byteLength<1*1024*1024){
//         console.timeEnd()
//     }
// })
// console.log(fileBuff.byteLength)
// console.log(fileBuff.toString())
// console.timeEnd()

// const readStream = fs.createReadStream('chars.txt',{
//     highWaterMark:16
// })
let readCount = 0;
// let progress = 0;

readStream.on('data',(chunk)=>{
    console.log(chunk.byteLength)
    // console.log((progress/64)*100,'%')
    // progress+=chunk.byteLength;
    readCount++;
    // fs.appendFileSync('farzi.mp4',chunk)
    if(readCount==2){
        exit()
    }
})
readStream.on('end',()=>{
    console.log(readCount)
    // console.log('100%')
})