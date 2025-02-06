import fs from 'fs';

console.log(process.stdin.fd)
console.log(process.stdout.fd)
console.log(process.stderr.fd)
// fs.open('text.txt',(err,fd)=>{
//     console.log(fd)
// })

// fs.open('app.js',(err,fd)=>{
//     console.log(fd)
// })

const fd1 = fs.openSync('text.txt');
const fd2 = fs.openSync('text.txt');

console.log({fd1,fd2})