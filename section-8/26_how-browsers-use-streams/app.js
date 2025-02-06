import http from 'http';
import fs from 'fs/promises'

// const readStream = fs.createReadStream('text.txt',{highWaterMark:1});
const server = http.createServer(async(req,res)=>{
    res.setHeader('access-control-allow-origin','*')
    // res.setHeader('Content-Type','text/plain')
    // res.setHeader('Content-Type','image/webp')
    res.setHeader('Content-Type','video/mp4')
    res.setHeader('Content-Disposition','attachment; filename=song.mp4')
    const fileHandle =await fs.open("C:\\Users\\Ehsan Ansari\\Videos\\KAKA  Official Video  Ginni Kapoor.mp4",);
    const {size} = await fileHandle.stat();
    res.setHeader('Content-Length',size)
    const readStream=  fileHandle.createReadStream({highWaterMark:5*1024*1024})
    readStream.on('data',(chunk)=>{
        res.write(chunk);
        readStream.pause();
        setTimeout(() => {
            readStream.resume()
        },1000);
    })
    readStream.on('end',()=>{
        res.end();
    })
});
server.listen(4000,'localhost',()=>{
    console.log('server started')
})





// import { read } from 'fs';
// import fs from 'fs/promises';

// const readFileHandle = await fs.open("C:\\Users\\Ehsan Ansari\\Videos\\KAKA  Official Video  Ginni Kapoor.mp4")
// const writeFileHandle = await fs.open("streams.mp4","w+");

// const readStream = readFileHandle.createReadStream();
// const writeStream = writeFileHandle.createWriteStream();

// readStream.pipe(writeStream)

// const readStream = fileHandle.createReadStream({encoding:'utf-8'});

// readStream.on('data',(chunk)=>{
//     console.log(chunk)
// })

// const writeStream = fileHandle.createWriteStream();

// writeStream.write('hii');