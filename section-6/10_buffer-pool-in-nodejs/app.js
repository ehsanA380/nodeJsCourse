import {Buffer, constants} from 'buffer';

// Buffer.poolSize = 10000;

// Condition for allocUnsafe to use Buffer Pool
// BufferSize < Buffer.poolSize >>> 1

// const a = Buffer.alloc(8)
// const z = Buffer.alloc(8)
// const jonBuffer = Buffer.concat([a,z])


// const b = Buffer.allocUnsafe(4095)
// const c = Buffer.allocUnsafe(4095-6)
// const d = Buffer.from('abcde')
// b[2]=96;
// c[0]=101;
// console.log(Buffer.poolSize)
// console.log(a.byteLength)
// console.log(b.byteLength)
// console.log('*********')
// console.log(a.buffer.byteLength)
// console.log(b.buffer.byteLength)
// console.log(a.buffer,b.buffer,c.buffer)
// const buffer = Buffer.alloc(90071992)
// console.log(constants.MAX_LENGTH)

const a = Buffer.allocUnsafe(4)
const b = Buffer.allocUnsafeSlow(4)

console.log(a.buffer.byteLength)
console.log(b.buffer.byteLength)