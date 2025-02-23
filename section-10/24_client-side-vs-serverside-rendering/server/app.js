import { readdir, open, readFile } from 'node:fs/promises';
import http from 'node:http';
import mime from 'mime-types'
import { createWriteStream } from 'node:fs';


const server = http.createServer(async (req, res) => {
    console.log(req.url,req.method)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.url === '/favicon.ico') return res.end(await readFile('./storage/icon/folder_icon.png'));
    if(req.method==='GET'){
        if (req.url == '/') {
            serveDirectory(req, res)
        } 
        else {
            try {
                const [url, queryString] = req.url.split('?');
                const queryParams = {};
                queryString?.split('&').forEach(pair => {
                    const [key, value] = pair.split('=');
                    queryParams[key] = value;
                })
                // console.log(queryParams)
                const fileHandle = await open(`./storage${decodeURIComponent(url)}`)
                const stats = await fileHandle.stat();
                if (stats.isDirectory()) {
                    serveDirectory(req, res)
                } else {
                    const readStream = fileHandle.createReadStream();
                    res.setHeader('Content-Type', `${mime.contentType(url.slice(1))}`)
                    res.setHeader('Content-Length', stats.size);
                    if (queryParams.action == 'download') {
                        res.setHeader('Content-Disposition', `attachment; filename=${url.slice(1)}`)
                    }
                    readStream.pipe(res);
                    readStream.on('error', (err) => {
                        res.end('no file')
                    })
                }
                // console.log(fileHandle)
                // fileHandle.close();
            } catch (err) {
                console.log('errr', err.message)
                res.end('404 Not Found')
            }
        }
    }else if(req.method === 'POST'){
        // res.end()
        console.log(req.headers.filename)
        const writeStream = createWriteStream(`storage/${req.headers.filename}`)
       
        req.on('data',(chunk)=>{
            writeStream.write(chunk)
        })
        // req.on('end',()=>{
        //     res.write('file uploaded');
        // })
    }else if(req.method==='OPTIONS'){
        res.end('ok')
    }
})

async function serveDirectory(req, res) {
    const [url] = req.url.split("?");
    const itemList = await readdir(`./storage${url}`);
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(itemList))
}

server.listen(80, '0.0.0.0', () => {
    console.log('sever stated on 80')
})