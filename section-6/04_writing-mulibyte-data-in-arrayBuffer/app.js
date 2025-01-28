const a = new ArrayBuffer(4);
const view = new DataView(a);

// view.setInt16(0,260);
// view.setInt16(2,260,true);
view.setUint32(0,0x23e433e4);

console.log(a)
// console.log(view.getInt16(0,))
console.log(view.getInt16(2,))
console.log(view.getInt32(0))