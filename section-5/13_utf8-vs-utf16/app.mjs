import fs from 'node:fs/promises';

const contentBuffer = await fs.readFile('text.txt');

console.log(contentBuffer);

function bufferToString(buffer){
    let decimalBufferString="";
    let stringBuffer="";
    buffer.forEach(e => {
        decimalBufferString +=e + ' ';
        stringBuffer += String.fromCharCode(e);

    });
    console.log('the string of your buffer is :',stringBuffer)
}

bufferToString(contentBuffer)
