// const environmentVariables = process.env;
//     console.log(environmentVariables);


// const environmentVariables = process.env;
// setInterval(()=>{
//     console.log(environmentVariables);
    
// },1000)


const {exec} = require('child_process');
// exec(`powershell -Command " setx es 'ehsan ansari' /M "`);

const fs = require('fs');

const fileData = fs.readFileSync('./abc').toString();
// console.log(fileData.split('\n'));
fileData.split(/\r?\n/).forEach(variable=>{
   const [key,value]=variable.split('=');
   console.log(key,value);
    process.env[key]=value;
   
})


// NODEREGEX 

setInterval(()=>{},1000)
