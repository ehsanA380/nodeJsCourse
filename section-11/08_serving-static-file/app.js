import express from 'express';
import {open, stat} from 'fs/promises';

const app = express();


app.use(express.static('public'))
app.use(express.json());

app.use('/admin',(req,res,next)=>{
    console.log(req.url)
    console.log(req.originalUrl)
    if(req.body.password==='secret'){
        next()
    }else{
        res.send('invalid credential');
    }
})

app.get('/',(req,res)=>{
    res.send('home page')
})
app.get('/kaka',async(req,res)=>{
    res.sendFile(`${import.meta.dirname}/public/kaka.mp4`)

    // const fileHandle = await open('./public/kaka.mp4');
    // const readStram = fileHandle.createReadStream();
    // const stats= await fileHandle.stat();
    // res.setHeader('Content-Length',stats.size);
    // res.setHeader('Content-Type','video/mp4');
    // res.setHeader('Accept-Ranges','bytes')
    // readStram.pipe(res);
})
app.post('/admin',(req,res)=>{
    res.send('hello admin')
})


app.listen(3000,(err)=>{
    console.log('server started')
})