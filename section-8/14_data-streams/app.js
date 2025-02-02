import fs from 'fs';
import {spawn} from 'child_process'
// Readable Stream 
// console.log(process.stdin)

// Writeable Stream 
// console.log(process.stdout)
// console.log(process.stderr)

// process.stdout.write('hi\n')

// const writeStream = fs.createWriteStream('output.txt');
// process.stdin.on('data',(chunk)=>{
//     // console.log(chunk)
//     console.log(chunk.toString())
//     writeStream.write(chunk)
// })

// process.stdin.pipe(writeStream)
// process.stderr.write('hii\n')

// console.log(process.stdin.fd)
// console.log(process.stdout.fd)
// console.log(process.stderr.fd)

// const childProcess = spawn("cat",["output.txt"])
// childProcess.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })

const childProcess = spawn("node",["childApp.js"])
const writeStream = fs.createWriteStream('rrr.mkv');
// childProcess.stdout.on('data',(chunk)=>{
//     console.log(chunk.toString())
// })
childProcess.stdout.pipe(writeStream)
// childProcess.stdin.write('coming from parent (app.js)');