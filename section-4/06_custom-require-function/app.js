const vm = require('vm')
const load = loadModule('./math.js')

// const {sum} = loadModule('./sum.js')
// console.log(sum(2,3));


// const num =44;
// vm.runInNewContext('console.log(num,"hi")',{ num ,console});
// vm.runInThisContext('console.log(num)');


function loadModule(path){
    const fs = require('fs');
    const fileContent = fs.readFileSync(path).toString();
    return (function(send){
            //module file goes here
            vm.runInNewContext(fileContent,{send,loadModule,console});
            // eval(fileContent);
            // console.log(send);
            return send;
            })({}); 
    // return fileContent
    console.log('exit');
    
}
