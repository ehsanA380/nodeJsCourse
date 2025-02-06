import fs from 'fs'

console.time()
const buff = Buffer.allocUnsafe(16 * 1024);
// Time 1000ms
// Time 13ms with custom internal buffer
const fd = fs.openSync('numbers.txt','w')
let TotalByteWrittenInBuffer = 0;
let remainingStr = "";
for(let i = 1; i<=100000; i++){
    let str = `${i}, `;
    str = remainingStr + str;
    const byteWritten = buff.write( str,TotalByteWrittenInBuffer);

    const writtenByteDiff = str.length - byteWritten;
    // console.log(writtenByteDiff)
    remainingStr=""
    if(writtenByteDiff !== 0){
        remainingStr = str.slice(byteWritten);
    }

    TotalByteWrittenInBuffer += byteWritten;
    if(TotalByteWrittenInBuffer===buff.byteLength){
        fs.writeSync(fd,buff);
        TotalByteWrittenInBuffer=0;
    }
    // console.log({byteWrittenInBuffer})
    // console.log(buff)
}
fs.writeSync(fd,buff.subarray(0,TotalByteWrittenInBuffer)  + remainingStr);
// fs.writeSync(fd,remainingStr)
// console.log(buff.toString())
console.timeEnd()

