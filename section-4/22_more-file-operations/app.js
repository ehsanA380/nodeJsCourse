import { watch } from 'node:fs';
import {rename,copyFile,cp,unlink,rmdir,rm,writeFile,appendFile,mkdir,stat, readFile} from 'node:fs/promises';
// rename method is used for both move and rename file and we can also rename directry
// await rename('ea.png','ea1.png');
// await copyFile('logo.png',"C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\mylogo.jpeg");// => it is used for only copy file
// await cp('./src',"C:\\Users\\Ehsan Ansari\\OneDrive\\Desktop\\src",{recursive:true});// => it is used for only copy both file and directory
// await cp("./src","C:\\Users\\Ehsan \\OneDrive\\Desktop\\src"); 
// unlink('ea1.png')
// rmdir('test')
// rm('test',{recursive:true})
// writeFile('styles.css','')
// mkdir('assets')
// const stats =await  stat('test');
// const stats =await  stat('app.js');
// console.log(stats)
// watch('style.css',(eventType,fileName)=>{
//     console.log(eventType,fileName);
// })
watch('style.css',async(eventType,fileName)=>{
    if(eventType==='change'){
        console.log(await readFile('style.css','utf-8'))
    }
    // console.log(eventType,fileName);
})
