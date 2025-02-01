import fs from 'fs'
// Time  7s 
// Memory 30 MB 
// CPU 12% 
console.time()
const readStream =  fs.createReadStream("D:\\movie\\webseries\\Farzi\\Farzi (2023) 720p HEVC HDRip Hindi S01 E04-E08 Complete Web Series x265 AAC ESubs.Mkv",{highWaterMark:1 * 1024 *1024});
// // const readStream =  fs.createReadStream("D:\\movie\\Pushpa 2 The Rule 2024 WEB-DL HQ 1080p Hindi [ORG DD 2.0] + Multi x264 AAC CineVood.mkv",{highWaterMark:100 * 1024 *1024});
const writeStream = fs.createWriteStream('stream.mp4',{highWaterMark:1*1024*1024})
readStream.on('data',(chunkBuffer)=>{
    // console.log(chunkBuffer)

    // after handling backPressur
    // time 4s 
    // memory 50 Mb 
    // cpu 5% 
    const isEmpty=writeStream.write(chunkBuffer);
    // console.log(chunkBuffer.byteLength)
    if(!isEmpty){
        readStream.pause();
    }
})
writeStream.on('drain',()=>{
    readStream.resume();
})
readStream.on('end',()=>{
    console.timeEnd()
})