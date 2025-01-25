import fs from 'node:fs/promises';

const contentBuffer = await fs.readFile('text.txt');
// console.log(await fs.readFile('text.txt','utf8'))
// console.log(contentBuffer.toString())
const videoBuffer =await fs.readFile('seg-234.m4s','hex');
fs.writeFile('video.mp4',videoBuffer);