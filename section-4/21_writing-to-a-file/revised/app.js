import fs from 'fs/promises';

// fs.writeFile('text.txt','hello')
// fs.appendFile('text.txt',' kaise ho \n mai thik hoon')

// const contentBuffer =await fs.readFile('C:/Users/Ehsan Ansari/OneDrive/Desktop/ajmerSharif.jpg');
// const contentBuffer =await fs.readFile('../EA-logo.avif');

// fs.appendFile('ajmer.png',contentBuffer)

// console.log(fileContent)

setInterval(()=>{
    fs.writeFile('time.txt',new Date().toLocaleTimeString())
})