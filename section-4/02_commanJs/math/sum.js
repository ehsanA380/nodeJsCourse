function sum(...nums){
   return nums.reduce((curr,acc)=>curr+acc)
}

// console.log('sum module')
module.exports = sum;
