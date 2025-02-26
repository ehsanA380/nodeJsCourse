import  express from 'express';
import fs from 'fs/promises'

const app = express()
const port = 3000

// Enabling Cors
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    next()
})

//serving files
// app.use(express.static(`${import.meta.dirname}/storage`));
app.use((req,res,next)=>{
    if(req.query.action==='download'){
        res.set('Content-Disposition',`attachment;`)
        // res.setHeader('Content-Disposition',`attachment;`)
    }
    express.static(`storage`)(req,res,next)
})

// serving directory
app.get('/',async (req, res) =>{
    const fileItems=await fs.readdir('./storage');
    res.json(fileItems)
})

app.listen(port, () => console.log(`server is listening on port ${port}!`))