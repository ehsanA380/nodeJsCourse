import { readdir,open, readFile } from 'node:fs/promises';
import http from 'node:http';
import mime from 'mime-types'

console.log(mime.contentType('text.txt'))
console.log(mime.contentType('text.mp3'))
console.log(mime.contentType('text.mp4'))
console.log(mime.contentType('text.pdf'))

const server = http.createServer(async(req,res)=>{
    if(req.url==='/favicon.ico') return res.end(await readFile('./storage/icon/folder_icon.png'));
    if(req.url=='/'){
        serveDirectory(req,res)
    }else{
        try{
            const [url,queryString]=req.url.split('?');
            const queryParams={};
            queryString.split('&').forEach(pair=>{
                const [key,value]=pair.split('=');
                queryParams[key]=value;
            })
            console.log(queryParams)
            const fileHandle = await open(`./storage${decodeURIComponent(url)}`)
            const stats = await fileHandle.stat();
            if(stats.isDirectory()){
                serveDirectory(req,res)
            }else{
                const readStream = fileHandle.createReadStream();
                res.setHeader('Content-Type',`${mime.contentType(url.slice(1))}`)
                res.setHeader('Content-Length',stats.size);
                if(queryParams.action=='download'){
                    res.setHeader('Content-Disposition',`attachment; filename=${url.slice(1)}`)
                }
                readStream.pipe(res);
                readStream.on('error',(err)=>{
                    res.end('no file')
                })
            }
            // console.log(fileHandle)
            // fileHandle.close();
        }catch(err){
            console.log('errr',err.message)
            res.end('404 Not Found')
        }  
    }
})

async function serveDirectory(req,res) {
    const [url] = req.url.split("?");
    const itemList = await readdir(`./storage${url}`);
    let dynamicHtml = '';
    itemList.forEach(async(item)=>{ 
        dynamicHtml+=`${item}<a  style='display:inline-flex' href='.${(url==='/')?'':url}/${item}?action=open&test=123' >open</a> <a  style='display:inline-flex' href='.${(url==='/')?'':url}/${item}?action=download&test=123'' >download</a> <br><br>`
    })
    const HtmlBoilerPlate =await readFile('./boilerPlate.html','utf8')
    res.end( HtmlBoilerPlate.replace("${dynamicHtml}",dynamicHtml))
}

server.listen(80,'0.0.0.0',()=>{
    console.log('sever stated on 80')
})