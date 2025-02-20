(async()=>{
    const response = await fetch('http://192.168.29.50:3000');

    // console.log(response.body)
    response.headers.forEach((value,key)=>{
        console.log(key.toUpperCase(),': ',value)
    })


  

    // for await(const chunk of response.body){
    //     console.log(chunk)
    // }
})()
