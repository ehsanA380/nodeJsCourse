#!/usr/bin/env node


import fs from 'fs/promises';
import chalk from 'chalk';
import { json } from 'stream/consumers';


const filePath = process.argv[2];

if(process.argv.length==2){
   console.log(chalk.bgRed.white('please provide filePath: '));
   process.exit(1)
}

const content = await  fs.readFile(filePath,'utf8');

const countObj = {}
// console.log('e' in countObj)
const data = content.split(/[\W]/)
const wordArray = data.filter((word)=>word!=='').map(word=>word.toLocaleLowerCase());



wordArray.forEach(element => {
   if(element in countObj){
    countObj[element]+=1;
   }else{
    countObj[element]=1;
   }
});

if(process.argv.length==4){
   const searchData = process.argv[3]
   if(searchData in countObj){
      console.log(chalk.bgGreen.black(`{${[searchData]}:${countObj[searchData]}}`))
   }else{
      console.log({[searchData]:0}, chalk.yellow(" try with another word!"))
   }
}else{
   console.log(countObj)
}



