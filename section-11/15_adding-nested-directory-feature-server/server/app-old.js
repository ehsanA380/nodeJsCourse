import { createWriteStream } from "fs";
import { open, readdir, readFile, rm, rename } from "fs/promises";
import http from "http";
import mime from "mime-types";

const server = http.createServer(async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  console.log(req.method);
  if (req.method === "GET") {
    if (req.url === "/favicon.ico") return res.end("No favicon.");
    if (req.url === "/") {
      console.log(req.socket.remoteAddress)
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
          const readStream = fileHandle.createReadStream({highWaterMark:1024*1024*1});
          res.setHeader("Content-Type", mime.contentType(url.slice(1)));
          res.setHeader("Content-Length", stats.size);
          if (queryParam.action === "download") {
            res.setHeader(
              "Content-Disposition",
              `attachment; filename="${url.slice(1)}"`
            );
          }
          readStream.pipe(res);
          // await fileHandle.close()
          readStream.on('end', async () => {
            if (fileHandle) {
              // await fileHandle.close();
            }
          })
          readStream.on('pause', async () => {
            if (fileHandle) {
              // await fileHandle.close();
            }
          })
        }
      } catch (err) {

        console.log(err.message);
        res.end("Not Found!");
        await fileHandle.close()
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
      writeStream.end();
      res.end("File uploaded on the server");
    });
  } else if (req.method === "DELETE") {
    req.on('data', async (chunk) => {
      // console.log(chunk.toString())
      try {
        const filename = chunk.toString();
        await rm(`storage/${filename}`)
        res.end('file deleted successfully')
      } catch (err) {
        res.end(err.message)
      }

    })
    // req.on('end',()=>{
    //   res.end("file deleted successfully")
    // })
  } else if (req.method === "PUT") {
    req.on('data', async (chunk) => {
      const filename = chunk.toString();
      const newFilename = decodeURIComponent(req.url);
      console.log({filename,newFilename})
      if (newFilename=='/') {
        res.end('same file name');
      } else {

        try {
          await rename(`storage/${filename}`, `storage/${newFilename}`)
          res.end('file renamed successfully')
        } catch (err) {
          res.end(err.message)
        }
      }
      // console.log(filename)
    })
    // req.on("end",()=>{
    //   res.end('file renamed successfully')
    // })
  }
});

async function serveDirectory(req, res) {
  const [url] = req.url.split("?");
  const itemsList = await readdir(`./storage${url}`);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(itemsList));
}

server.listen(80, () => {
  console.log("Server started");
});
