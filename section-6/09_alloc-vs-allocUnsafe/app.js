import {Buffer} from 'buffer';
// const buffer1 = Buffer.alloc(4001)
// const buffer2 = Buffer.allocUnsafe(4501)

// // console.log(buffer1)
// // console.log(buffer2)
// // console.log(buffer1.toString())
// console.log(buffer2.toString())

console.time('Buffer.alloc')
for (let i = 0; i < 100000; i++) {
    Buffer.alloc(1024); 
}
console.timeEnd('Buffer.alloc')
console.time('Buffer.allocUnsafe')
for (let i = 0; i < 100000; i++) {
    Buffer.allocUnsafe(1024); 
}
console.timeEnd('Buffer.allocUnsafe')
