import fs from 'fs';
let i=0;
console.time()
// while(i<5000){
//     fs.appendFileSync('text.txt',`${i},   `,'utf-8')
//     i++;
// }

const writeStream = fs.createWriteStream('text.txt',{highWaterMark:1});

for (let i = 1; i <= 100000; i++) {
    writeStream.write(`${i}, `)
}

writeStream.end();

writeStream.on('finish',()=>{
    console.timeEnd()
})
