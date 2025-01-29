import fs from 'fs/promises';

//btoa()
// const a = await fs.readFile('file.txt','base64');
// const bufferContent = await fs.readFile('favicon\\favicon-32x32.png')
// const a = bufferContent.toString("base64");

// console.log(a);

//atob()
// fs.writeFile('new-file.txt','YWJj','base64');
// fs.writeFile('new-file.txt',a);
// const a = await fs.readFile('new-file.txt','utf-8')
// const a = await fs.readFile('script.js','base64')
const a = await fs.readFile('script.js','base64url')
// fs.writeFile('a.png',a,'base64')
fs.writeFile('script.txt',a);
