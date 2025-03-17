import express from 'express';
import { createWriteStream, stat } from 'fs';
import fs from 'fs/promises'
import cors from 'cors';
import { dir } from 'console';

const app = express()
const port = 3000

// Enabling Cors
app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//     console.log(req.method)
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', '*')
//     res.setHeader('Access-Control-Allow-Headers', '*')
//     next()
// })

//serving files
// app.use(express.static(`${import.meta.dirname}/storage`));
// app.use(async(req, res, next) => {
//     if (req.query.action === 'download') {
//         res.set('Content-Disposition', `attachment;`)
//         // res.setHeader('Content-Disposition',`attachment;`)
//     }
    
//     express.static(`storage`)(req, res, next)
// });


// serving directory
app.get('/directory/:dirname?', async (req, res) => {
    const {dirname} = req.params;
    const fullDirPath = `./storage/${dirname ? dirname : ''}`;
    const fileItems = await fs.readdir(fullDirPath);
    let resData = [];
    for(const item of fileItems){
        const stats = await fs.stat(`${fullDirPath}/${item}`);
        // console.log(stats.isDirectory())
        resData.push({
            name: item,
            isDirectory: stats.isDirectory(),
        });
    }
    // console.log(resData)
    res.json(resData)
})
app.get('/files/:filename',(req,res)=>{
    const {filename} = req.params;
    if(req.query.action==='download'){
        res.set('Content-Disposition', `attachment;`)
    }
    res.sendFile(`${import.meta.dirname}/storage/${filename}`)
})
//upload file
app.post('/', (req, res) => {
    const filename = req.headers.filename;
    const wrtieStream = createWriteStream(`./storage/${filename}`);
    req.pipe(wrtieStream);
    req.on('end', () => {
        res.end('file uploaded successfully.')
    })
})
//rename file
app.put('/files/:filename', (req, res) => {

    req.on('data', async (chunk) => {
        const data = JSON.parse(chunk.toString());
        console.log(data)
        if (data.newFilename == '') {
            res.end('same file name');
        } else {

            try {
                await fs.rename(`storage/${data.filename}`, `storage/${data.newFilename}`)
                console.log('file renamed to ', data.newFilename)
                res.end('file renamed successfully')
            } catch (err) {
                res.end(err.message)
            }
        }
        // console.log(filename)
    })

})
//delete file
app.delete('/files/:filename',(req,res)=>{
    req.on('data',async(chunk)=>{
        const deleteFilename =chunk.toString();
        try{
            await fs.rm(`./storage/${deleteFilename}`)
            res.end('file deleted successfully');
            console.log(deleteFilename,' deleted')
        }catch(err){
            res.end(err.message);
            console.log(err.message)
        }
    })
})

app.listen(port, () => console.log(`server is listening on port ${port}!`))