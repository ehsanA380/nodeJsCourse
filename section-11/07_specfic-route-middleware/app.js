import express from 'express';

const app = express();

// how middleware check condition-----
// req.url.startsWith(routeName)
// "/users/1".startsWith("/users")
//------------------------------------
// app.use('/users',(req,res,next)=>{
//     res.end('First middleware=> ')
//     // next()
// })
// app.use('/users/1',(req,res,next)=>{
//     res.end('second middleware=> ')
//     // next()
// })

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

app.post('/admin',(req,res)=>{
    res.send('hello admin')
})

// app.get('/',(req,res,next)=>{
//     res.end("Home Route");
//     }
// )
// app.get('/login',(req,res,next)=>{
//     res.end("logged In");
//     }
// )
// app.post('/',(req,res,next)=>{
//     console.log(req.body)
//     res.end("post home route");
//     }
// )
// app.delete('/',(req,res,next)=>{
//     res.send("deletion successfully");
//     }
// )
// app.patch('/',(req,res,next)=>{
//     res.send("patched successfully");
//     }
// )
// app.options('/',(req,res,next)=>{
//     res.send("options got successfully");
//     }
// )
// app.put('/',(req,res,next)=>{
//     res.end("put req got successfully");
//     }
// )
// app.head('/head', (req, res) => {
//     console.log('head method called')
//     // res.setHeader('name', 'ehsan');
//     // res.setHeader('data', 'ehsan');
//     res.end();
// })
app.listen(3000,(err)=>{
    console.log('server started')
})