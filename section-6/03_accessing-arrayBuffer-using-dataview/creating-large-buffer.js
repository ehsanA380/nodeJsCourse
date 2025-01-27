const a = new ArrayBuffer(1.9 * 1024 * 1024 );
const view = new DataView(a);

for (let i = 0; i < a.byteLength; i++) {
    view.setInt8(i,i++);
    
}
// console.log(a)

const decoder = new TextDecoder('utf-8');
const decodedString = decoder.decode(view);
console.log(view)