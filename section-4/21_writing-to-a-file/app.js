#!/usr/bin/env node
import {readFile,writeFile,appendFile} from 'node:fs/promises';
// import fs from 'node:fs/promises';

// fs.writeFile('file-1.txt','world');
// const fileContent= await readFile("C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\file-1.txt",'utf-8');
// writeFile('file-1.txt',`${fileContent}`);
// const contentBuffer= await readFile("C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\file-1.txt");
// writeFile('file-1.txt',contentBuffer);
// const imageBuffer= await readFile('EA-logo.avif');
// writeFile('C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\mylogo.png',imageBuffer);

// copy cmd logic -------------------
// const inputArr = process.argv;
// if(inputArr.length==2){
//     console.log('please provide paths => eg. "content-path" and "paste-location-path"');   
// }else if(inputArr.length==3){
//     console.log('please provide paste-locaion-path ');
// }else{
//     const imageBuffer= await readFile(inputArr[2]);
//     writeFile(inputArr[3],imageBuffer);
// }
//---------------------------------------------------
// console.log(imageBuffer);/


// writeFile('time.txt',formattedTime)
// console.log(formattedTime)

// setInterval(()=>{
//     // const now = new Date();
//     // const hours = now.getHours().toString().padStart(2, '0');
//     // const minutes = now.getMinutes().toString().padStart(2, '0');
//     // const seconds = now.getSeconds().toString().padStart(2, '0');
//     // const formattedTime = `${hours}:${minutes}:${seconds}`;
//     // writeFile('time.txt',formattedTime)
//     const nowTime = new Date().toLocaleTimeString();
//     writeFile('time.txt',nowTime)
// },1000)

try{
    const contentBuffer= await readFile("C\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\file-1dd.txt");
    writeFile('file-1.txt',contentBuffer);
}catch(err){
    appendFile('error.log',`\n\n${new Date().toLocaleTimeString()}\n${err.message}\n${err.stack}`);
    console.log('to see full error message go to ./error.log file');
    
}




