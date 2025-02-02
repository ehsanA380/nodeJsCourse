import fs from 'fs'

const writeStream = fs.createWriteStream('file.txt',{highWaterMark:4})

// writeStream.cork();
writeStream.write('hi')
writeStream.write('hi')
writeStream.write('hi')
// console.log(writeStream.writable)
// writeStream.end('end');
// console.log(writeStream.writable)
// console.log(writeStream.writableCorked)
// writeStream.uncork()
// console.log(writeStream.writableCorked)
console.log(writeStream.writableEnded)
writeStream.end()
console.log(writeStream.writableEnded)
console.log(writeStream.writableLength)
setTimeout(() => {
    console.log(writeStream.writableFinished)
    console.log(writeStream.writableLength)
}, 10);
