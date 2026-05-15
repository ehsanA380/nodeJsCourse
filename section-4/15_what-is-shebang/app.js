#!/usr/bin/env node
// #!/usr/bin/env ehsanExe
// ^ it is shebang expression to execute our app.js in cmd termial only by give its path
console.log('hi')
let num = 0;
setInterval(()=>{
    console.log(num++);
    if(num>6){
        return process.exit(2)
    }
    
},1500)
