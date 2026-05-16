import fs from 'fs/promises';

const content = await  fs.readFile('../ehsan-word-counter/file-2.txt','utf8');


const countObj = {}
const data = content.split(/[\W]/)

data.forEach(element => {
   if(countObj[element]){
    countObj[element]+=1;
   }else{
    countObj[element]=1;
   }
});


console.log(countObj)


