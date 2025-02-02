import fs from 'fs'
// console.log("child App")
const writeStream = fs.createWriteStream('output.txt')
const readStream = fs.createReadStream("D:\\movie\\RRR (Hindi) (2022) 1080p.mkv",{highWaterMark:1*1024*1024})

readStream.pipe(process.stdout)
// process.stdin.on('data',(chunk)=>{
    // console.log("in childApp:-",chunk.toString())
    
// })
// process.stdin.pipe(writeStream)