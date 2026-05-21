const a = new ArrayBuffer(4);
const view = new DataView(a);

view.setInt8(0,-130)
view.setInt8(1,0b1010000)
view.setInt8(2,0xff)
view.setInt8(3,0o120)

console.log(view.getInt8(0));  // it return the signed int value
console.log(view.getUint8(2))  // it return the unsigned int value
