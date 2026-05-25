import {Buffer} from 'buffer'
// const uint8Array = new Uint8Array(4);
// const nodeBuffer = new Buffer(4); // depricated due to security and usability issues.
// const nodeBuffer =  Buffer.alloc(4);

const a = new ArrayBuffer(4);
const uint8Array = new Uint8Array(a);

uint8Array[0]=97;
uint8Array[1]=98;
uint8Array[2]=99;
uint8Array[3]=100;

const nodeBuffer = Buffer.from(a);

console.log(nodeBuffer.buffer)