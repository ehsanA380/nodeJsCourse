// (async()=>{
//     const response = await fetch('http://192.168.29.50:3000');
//     // const data = await response.text();
//     // console.log(data)
//     // console.log(response.body)
//     // response.headers.forEach((value,key)=>{
//     //     console.log(key.toUpperCase(),': ',value)
//     // })
//     const decoder = new TextDecoder();
//     const data = document.getElementById('data');
//     for await( const chunk of response.body){
//         console.log(decoder.decode(chunk))
//         data.innerText+=decoder.decode(chunk)
//     }


  

//     // for await(const chunk of response.body){
//     //     console.log(chunk)
//     // }
// })()
