import fs from 'node:fs/promises';

const contentBuffer = await fs.readFile('text.txt');
// console.log(await fs.readFile('text.txt','utf8'))
console.log(contentBuffer.toString())