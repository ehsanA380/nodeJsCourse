import express from 'express';

const app = express();

//parsing JSON Body (Custom Middleware)
// app.use((req,res,next)=>{
//     // res.send('global middleware ')
//     console.log(req.method)
//     // console.log(req.headers)
//     console.log(req.url)
//     req.on('data',(chunk)=>{
//         const data = JSON.parse(chunk.toString())
//         // console.log(data)
//         req.body=data;
//         next()
//     })
// })
app.use(express.json())
// const json = express.json()
// console.log(json)

app.get('/',(req,res,next)=>{
    res.end("Home Route");
    }
)
app.get('/login',(req,res,next)=>{
    res.end("logged In");
    }
)
app.post('/',(req,res,next)=>{
    console.log(req.body)
    res.end("post home route");
    }
)
app.delete('/',(req,res,next)=>{
    res.send("deletion successfully");
    }
)
app.patch('/',(req,res,next)=>{
    res.send("patched successfully");
    }
)
app.options('/',(req,res,next)=>{
    res.send("options got successfully");
    }
)
app.put('/',(req,res,next)=>{
    res.send("put req got successfully");
    }
)
app.head('/head', (req, res) => {
    console.log('head method called')
    // res.setHeader('name', 'ehsan');
    // res.setHeader('data', 'ehsan');
    res.end();
})
app.listen(3000,(err)=>{
    console.log('server started')
})