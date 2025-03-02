import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json())
app.use(express.static('client'));

// app.use((req,res,next)=>{ 
    // const allowedOrigin = ["http://127.0.0.1:3000","http://127.0.1.1:3000"];
    // if(allowedOrigin.includes(req.headers.origin)){
    //     res.set( 'Access-Control-Allow-Origin',req.headers.origin)
    // }

    // res.set( 'Access-Control-Allow-Origin',req.headers.origin);
    // next()
// })
app.use(cors())

app.get('/api',(req,res)=>{
    // console.log(req.params)
    console.log(req.headers.origin)
    res.json({message:'Hello world get'})
})

app.post('/api',(req,res)=>{
    // console.log(req.body)
    res.json({message:'Hello world post'})
})
app.put('/api',(req,res)=>{
    // console.log(req.body)
    res.json({message:'Hello world put'})
})

app.listen(3000,()=>{
    console.log('server started on port 3000')
})