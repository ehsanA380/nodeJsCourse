import {Buffer} from 'buffer';
import { buffer } from 'stream/consumers';
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

const str = 'hi I am ehsan ansri'

const buffer1 = Buffer.allocUnsafe(str.length).fill(str)

console.log(buffer1.toString())
