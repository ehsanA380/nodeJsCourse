const digitList1 = [2,4,6,5,4];

// const digitToNumber =(arr)=>{
//     let value=0;
//     arr.forEach((num,i)=>{
//     value+=num * 10**i;
// })
// return value;
// }
const digitToNumber =(arr)=>{
   return arr.reduce((acc,curr,i)=>acc+ curr * 10**i,1)
}
console.log(digitToNumber(digitList1));
