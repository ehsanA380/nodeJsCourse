import fs from 'fs';
// import fsPromises from 'fs/promises';

setTimeout(() => {
    console.log('hii')
}, 0);

//async IO
// const fileContent = await fsPromises.readFile('file.txt','utf-8')
const fileContent =  fs.readFile('file.txt','utf-8',(err,data)=>{
    console.log(data)
})

//sync IO
// const fileContent = await fs.readFileSync('file.txt','utf-8')


// console.log(fileContent)