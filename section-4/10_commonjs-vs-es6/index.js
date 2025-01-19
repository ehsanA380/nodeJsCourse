// module.exports.num=55;
// console.log(this)

// console.log('running index.js')

// import timer from './timer.js'
// console.log(timer);

//in cjs await is not allowed in top , it has to wrapped in async function
// (async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos')
//                             .then(res=>res.json()).then(data=>{
//                                 console.log(data);   
//                             })
// })()

// in es6 module awaited in top is allowed without wrapped in async funtion
// const response = await fetch('https://jsonplaceholder.typicode.com/todos');

// const data = await response.json();
// console.log(data);

//import in es6 module

// import defVal,{obj1,str,bool,num} from './timer.js'
// console.log(defVal,obj1,str,bool,num);

// import in cjs module 
const {obj1,obj2,obj3} =require('./timer')
console.log(obj1,obj2,obj3);







