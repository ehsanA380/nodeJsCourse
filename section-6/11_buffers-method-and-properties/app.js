import {Buffer} from 'buffer';
import fs from 'fs/promises';

// const nodeBuffer = Buffer.from("Hello World!");
// const nodeBuffer = Buffer.from("Hello World!","utf-16le");

// fs.writeFile('text.txt',nodeBuffer)

// console.log(nodeBuffer.toString("utf-8"))
// console.log(nodeBuffer)

const nodeBuffer = Buffer.alloc(8);
// const nodeBuffer = Buffer.from("hello world!");
// const nodeBuffer2 = Buffer.alloc(8);
// nodeBuffer.write("abc",'utf8');
// console.log(nodeBuffer.toString())
// console.log(nodeBuffer.toJSON())
// console.log(nodeBuffer.slice(5,9).toString());
// console.log(nodeBuffer.subarray(3).toString());
// nodeBuffer.copy(nodeBuffer2,0,0,5)
// console.log(nodeBuffer2.toString())
// console.log(nodeBuffer.includes('hel'));
// console.log(nodeBuffer.readInt8(1))
// console.log(nodeBuffer.readUInt16LE(1))
// console.log(nodeBuffer)
// // nodeBuffer.writeInt8(0x65)
// nodeBuffer.writeInt16LE(0x65,0)
// nodeBuffer.writeInt16BE(0x65,2)
// console.log(nodeBuffer.at(3))
// console.log(nodeBuffer)

// ------properties----------
console.log(nodeBuffer.buffer)
console.log(nodeBuffer.byteLength)
console.log(nodeBuffer.byteOffset)
console.log(nodeBuffer.length)