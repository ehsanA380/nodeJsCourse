import fs from 'fs';

const writeStream = fs.createWriteStream('file.txt',{highWaterMark:4});

// console.log(writeStream.writableHighWaterMark)

// console.log(writeStream.writableLength)
// let isEmpty = writeStream.write('a');
// console.log(isEmpty)
// console.log(writeStream.writableLength)
// isEmpty = writeStream.write('a');
// console.log(isEmpty)
// console.log(writeStream.writableLength)
// isEmpty = writeStream.write('a');
// console.log(isEmpty)
// console.log(writeStream.writableLength)
// isEmpty = writeStream.write('a');
// console.log(isEmpty)
// console.log(writeStream.writableLength)
// isEmpty = writeStream.write('a');
// console.log(isEmpty)
// console.log(writeStream.writableLength)

let i = 1;
function write1000A (){
    while(i<=1000){
        console.log(writeStream.writableLength)
        let isEmpty = writeStream.write('a');
        i++;
        if(!isEmpty){
            break
        }
        console.log(isEmpty)
    }
}
write1000A()

writeStream.on('drain',()=>{
   write1000A()
})
