import { read } from 'fs';
import fs from 'fs/promises';

const readFileHandle = await fs.open("C:\\Users\\Ehsan Ansari\\Videos\\KAKA  Official Video  Ginni Kapoor.mp4")
const writeFileHandle = await fs.open("streams.mp4","w+");

const readStream = readFileHandle.createReadStream();
const writeStream = writeFileHandle.createWriteStream();

readStream.pipe(writeStream)

// const readStream = fileHandle.createReadStream({encoding:'utf-8'});

// readStream.on('data',(chunk)=>{
//     console.log(chunk)
// })

// const writeStream = fileHandle.createWriteStream();
// writeStream.write('hii');