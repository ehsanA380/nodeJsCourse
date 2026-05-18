import { Buffer } from 'node:buffer';
import fs from 'node:fs/promises';

const contentBuffer = await fs.readFile('text.txt');

// console.log(contentBuffer);
const customBuffer =Buffer.from([0x68, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x49, 0x20, 0x61, 0x6d, 0x20, 0x45, 0x68, 0x73, 0x61, 0x6e, 0x20, 0xe2, 0x9d, 0xa4, 0xef, 0xb8, 0x8f]);

function bufferToString(buffer){
    let hexBufferArray=[];
    let stringBuffer="";
    buffer.forEach(e => {
        hexBufferArray.push(e);
        // stringBuffer += String.fromCharCode(e);
        // stringBuffer += String.fromCodePoint(e);

        
        
    });
    // Proper UTF-8 decoding
    stringBuffer = Buffer.from(hexBufferArray).toString();

    console.log('hex buffer', Buffer.from(hexBufferArray))

    console.log('the string of your buffer is :',stringBuffer)
}
bufferToString(contentBuffer)
