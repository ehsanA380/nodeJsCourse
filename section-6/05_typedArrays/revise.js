const a = new ArrayBuffer(16);

const unint8Array = new Uint8Array(a);
const unint16Array = new Uint16Array(a);
const unint32Array = new Uint32Array(a);
const unint64Array = new BigUint64Array(a);
const clamped  = new Uint8ClampedArray(a);



console.log(unint8Array)
console.log(unint16Array)
console.log(unint32Array)
console.log(unint64Array)
console.log(clamped)
console.log(clamped.length)
