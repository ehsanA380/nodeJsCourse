// const a = new ArrayBuffer(4);

// const uint8Array = new Uint8Array(a);
// const uint16Array = new Uint16Array(a);
// const uint32Array = new Uint32Array(a);

// console.log(uint8Array)
// console.log(uint16Array)
// console.log(uint32Array)

// const uint8Array = new Uint8Array(4);

// uint8Array[0] = 0xfe
// uint8Array[1] = 0xf1
// uint8Array[2] = 0xf2
// uint8Array[3] = 0xf3

// const uint8Array = new Uint8Array([0xfe,0xf1,0,0xf2]);

// const uint8Array = new Uint8Array(1.99 * 1024 * 1024 *1024);
// const uint8Array = new Uint8Array(1.99 * 1024 * 1024 *1024).fill(0xfe);

// setInterval(()=>{
//     [
//         new Uint8Array(1.99 * 1024 * 1024 *1024).fill(0xfe),
//         new Uint8Array(1.99 * 1024 * 1024 *1024).fill(0xfe),
//     ]
// },1000)

// console.log(uint8Array.buffer)

const a = new ArrayBuffer(8,{maxByteLength:16});

const uint8Array = new Uint8Array(a);
uint8Array[0]=0xfe;
uint8Array[1]=0xff;
console.log(a)


const b = a.transfer();
console.log("b",b);

console.log(a)


