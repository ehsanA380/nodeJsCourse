import fs from 'node:fs/promises';

const contentBuffer = await fs.readFile('text.txt');
let binaryStr = '';
contentBuffer.forEach(e => {
   binaryStr+=e.toString(2) +' ';
});
console.log(binaryStr);
console.log(contentBuffer);
