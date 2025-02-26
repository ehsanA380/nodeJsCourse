import express from 'express';

const app = express();


app.get('/',(req,res)=>{
    // res.setHeader('Content-Type','application/json')
    // res.write(JSON.stringify({name:'arman'}))
    // res.json({name:'ehsan'})
    res.status(300).json({name:'ehsan'})
    // console.log(res.statusCode)
})


app.listen(3000,(err)=>{
    console.log('server started')
})