const fs = require('fs');
const write = fs.writeFileSync('./text.txt',"ehsah");
const text = fs.readFileSync('./text.txt');
console.log(global);

console.log(text.toString());

