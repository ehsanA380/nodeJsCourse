import express from 'express';
import { createWriteStream } from 'fs';
import fs from 'fs/promises'
import cors from 'cors';

const app = express()
const port = 3000

// Enabling Cors
app.use(cors());
// app.use((req, res, next) => {
//     console.log(req.method)
//     res.setHeader('Access-Control-Allow-Origin', '*')
//     res.setHeader('Access-Control-Allow-Methods', '*')
//     res.setHeader('Access-Control-Allow-Headers', '*')
//     next()
// })

//serving files
// app.use(express.static(`${import.meta.dirname}/storage`));
app.use(async(req, res, next) => {
    if (req.query.action === 'download') {
        res.set('Content-Disposition', `attachment;`)
        // res.setHeader('Content-Disposition',`attachment;`)
    }
    
    express.static(`storage`)(req, res, next)
});


// serving directory
app.get('/', async (req, res) => {
    const fileItems = await fs.readdir('./storage');
    // const stats = await 
    res.json(fileItems)
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
app.put('/', (req, res) => {

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
app.delete('/',(req,res)=>{
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