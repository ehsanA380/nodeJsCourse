import fs, { read } from 'fs';
import { exit } from 'process';

const readStream = fs.createReadStream('chars.txt',{highWaterMark:4});

// readStream.on('data',(chunk)=>{
//     console.log('hi',chunk)
//     readStream.pause();
//     console.log(readStream.readableFlowing);
//     console.log(readStream.readableEnded);
//     console.log(readStream.isPaused());
// })

// readStream.on('end',(chunk)=>{
//     console.log(readStream.readableFlowing);
//     console.log(readStream.readableEnded);
//     console.log(readStream.isPaused());
// })
// let readCount = 0;
readStream.on('data',(chunk)=>{
    // readCount++;
    if(readStream.readableHighWaterMark===readStream.bytesRead){
        fs.writeFileSync('text.txt',chunk);
    }else{
        fs.appendFileSync('text.txt',chunk);
    }
    readStream.pause()
    setTimeout(()=>{
        readStream.resume();
    },500)
    // readStream.on('end',()=>{
    //     process.exit();
    // })
})
