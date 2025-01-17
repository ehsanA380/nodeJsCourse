function sum(...nums){
    return nums.reduce((curr,acc)=>curr+acc)
 }
const product = (...nums)=>{ return nums.reduce((curr,acc)=>curr*acc)}

// console.log('hi');
// console.log(module);



module.exports = {sum , product}

// console.log(module);
// exports.sum = sum 
// exports.product = product
