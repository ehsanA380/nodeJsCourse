import fs from 'fs'

const writeStream = fs.createWriteStream('file.txt')

writeStream.write('a')
writeStream.write('a')
writeStream.write('a')
writeStream.write('a')
writeStream.end('b')
// writeStream.write('a')

writeStream.on('open',(fd)=>{
    console.log('fd',fd)
})
writeStream.on('finish',()=>{
    console.log('finished')
})