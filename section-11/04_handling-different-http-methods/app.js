import express from 'express';

const app = express();


app.get('/',(req,res,next)=>{
    res.send("Home Route");
    }
)
app.get('/login',(req,res,next)=>{
    res.send("logged In");
    }
)
app.post('/',(req,res,next)=>{
    res.send("post home route");
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
    res.setHeader('name', 'ehsan');
    res.setHeader('data', 'ehsan');
    res.end();
})
app.listen(3000,(err)=>{
    console.log('server started')
})