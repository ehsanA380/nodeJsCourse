// import {Buffer} from 'buffer'
// const nodeBuffer =  Buffer.alloc(4);
// const a = new ArrayBuffer(4);
// const uint8Array = new Uint8Array(a).fill(97);
// const nodeBuffer = Buffer.from(a)
const nodeBuffer = Buffer.alloc(4);
const nodeBuffer2 = Buffer.from([97,98,99,100]);
const nodeBuffer3 = Buffer.allocUnsafe(4)


// console.log(uint8Array.toString())
// console.log(nodeBuffer.toString())
console.log(nodeBuffer.byteLength,nodeBuffer)
console.log(nodeBuffer2.byteLength,nodeBuffer2)
console.log(nodeBuffer3.byteLength,nodeBuffer3)
console.log(nodeBuffer.buffer.byteLength)
console.log(nodeBuffer2.buffer.byteLength)
console.log(nodeBuffer3.buffer.byteLength)