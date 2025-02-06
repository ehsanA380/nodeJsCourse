import fs from 'fs'

const fd = fs.openSync('text.txt','w');
// fs.write(fd,'!😊',(err,bytesWritten,dataWritten)=>{
//     console.log(bytesWritten)
//     console.log(dataWritten)
// })

const byteWritten = fs.writeSync(fd,'❤️')
console.log(byteWritten)