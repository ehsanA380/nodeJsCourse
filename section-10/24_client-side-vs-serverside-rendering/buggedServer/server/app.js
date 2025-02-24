// import { readdir, open, readFile } from 'node:fs/promises';
// import http from 'node:http';
// import mime from 'mime-types'
// import { createWriteStream } from 'node:fs';


// const server = http.createServer(async (req, res) => {
//     // console.log(req.url,req.method)
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', '*');
//     console.log(req.method)
//     if(req.method==='GET'){
//         if (req.url === '/favicon.ico') return res.end(await readFile('./storage/icon/folder_icon.png'));
//         if (req.url == '/') {
//             serveDirectory(req, res)
//         } 
//         else {
//             try {
//                 const [url, queryString] = req.url.split('?');
//                 const queryParams = {};
//                 queryString?.split('&').forEach(pair => {
//                     const [key, value] = pair.split('=');
//                     queryParams[key] = value;
//                 })
//                 // console.log(queryParams)
//                 const fileHandle = await open(`./storage${decodeURIComponent(url)}`)
//                 const stats = await fileHandle.stat();
//                 if (stats.isDirectory()) {
//                     serveDirectory(req, res)
//                 } else {
//                     const readStream = fileHandle.createReadStream();
//                     res.setHeader('Content-Type', `${mime.contentType(url.slice(1))}`)
//                     res.setHeader('Content-Length', stats.size);
//                     if (queryParams.action == 'download') {
//                         res.setHeader('Content-Disposition', `attachment; filename=${url.slice(1)}`)
//                     }
//                     readStream.pipe(res);
//                     readStream.on('error', (err) => {
//                         res.end('no file')
//                     })
//                 }
             
//             } catch (err) {
//                 console.log('errr', err.message)
//                 res.end('404 Not Found')
//             }
//         }
  
//     }else if(req.method==='OPTIONS'){
//         res.end('ok');
//     }else if(req.method==='POST'){
//         // const writeStream = createWriteStream('new.txt');
//         req.on('data',(chunk)=>{
//             console.log(chunk.toString())
//             // writeStream.write(chunk)
//         });
//         req.on('end',()=>{
//             res.end('file uploaded on server ')
//         })
//     }
 
// })

// async function serveDirectory(req, res) {
//     const [url] = req.url.split("?");
//     const itemList = await readdir(`./storage${url}`);
//     res.setHeader('Content-Type', 'application/json')
//     res.end(JSON.stringify(itemList))
// }

// server.listen(80, '0.0.0.0', () => {
//     console.log('sever stated on 80')
// })


















import { createWriteStream } from "fs";
import { open, readdir, readFile } from "fs/promises";
import http from "http";
import mime from "mime-types";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  console.log(req.method);
  if (req.method === "GET") {
    if (req.url === "/favicon.ico") return res.end("No favicon.");
    if (req.url === "/") {
      serveDirectory(req, res);
    } else {
      try {
        const [url, queryString] = req.url.split("?");
        const queryParam = {};
        queryString?.split("&").forEach((pair) => {
          const [key, value] = pair.split("=");
          queryParam[key] = value;
        });
        console.log(queryParam);

        const fileHandle = await open(`./storage${decodeURIComponent(url)}`);
        const stats = await fileHandle.stat();
        if (stats.isDirectory()) {
          serveDirectory(req, res);
        } else {
          const readStream = fileHandle.createReadStream();
          res.setHeader("Content-Type", mime.contentType(url.slice(1)));
          res.setHeader("Content-Length", stats.size);
          if (queryParam.action === "download") {
            res.setHeader(
              "Content-Disposition",
              `attachment; filename="${url.slice(1)}"`
            );
          }
          readStream.pipe(res);
        }
      } catch (err) {
        console.log(err.message);
        res.end("Not Found!");
      }
    }
  } else if (req.method === "OPTIONS") {
    res.end("OK");
  } else if (req.method === "POST") {
    const writeStream = createWriteStream(`./storage/${req.headers.filename}`);
    let count = 0;
    req.on("data", (chunk) => {
      count++;
      writeStream.write(chunk);
    });
    req.on("end", () => {
      console.log(count);
      res.end("File uploaded on the server");
    });
  }
});

async function serveDirectory(req, res) {
  const [url] = req.url.split("?");
  const itemsList = await readdir(`./storage${url}`);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(itemsList));
}

server.listen(80, "0.0.0.0", () => {
  console.log("Server started");
});
