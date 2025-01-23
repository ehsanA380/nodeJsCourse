// import fs from 'node:fs'
import fs from 'node:fs/promises'

// const a = fs.readFileSync('./index.html');

// // console.log(a)
// // console.dir(a)
// console.log(a.toString())
// const content = fs.readFileSync('./app.js','utf-8')
// console.log(content);

// fs.readFile('./index.html',(err,data)=>{
//     console.log(data);
// })


console.time();
let i =0;
const timeId = setInterval(()=>{
    console.log(i++)
    if(i==150){
        clearInterval(timeId)
        console.timeEnd()
    }
},5)
const a =await   fs.readFile('./data.txt','utf-8');
console.log('reading done');
console.log('end')