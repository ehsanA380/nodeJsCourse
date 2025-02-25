import express from 'express';

const app = express();


app.get('/',
    // request handler middleware - 3 params
    (req,res,next)=>{
    res.write("hello world 1");
    console.log(('running middleware 1'))
    // console.log(num);
    // throw new Error('this is the error')
    next('dd');
    },
    // request handler middleware - 2 params
    (req,res)=>{
    res.end("hello world 2");
    console.log(('running middleware 2'))
    },
    // error handler middleware - 4 params
    (err,req,res,next)=>{
        console.log(('running error middleware '))
        console.log({err})
        res.end(`${err}`)
    },
)

app.listen(3000,(err)=>{
    console.log('server started')
})