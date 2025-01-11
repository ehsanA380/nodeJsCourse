const fs = require('fs');
const write = fs.writeFileSync('./text.txt',"ehsah");
const text = fs.readFileSync('./text.txt');
fs.renameSync('./index.html','text.txt')
// fs.unlinkSync('./ehsan');
// console.log(global);

// console.log(text.toString());

