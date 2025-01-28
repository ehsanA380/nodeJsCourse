fetch('http://localhost:3000')
    // .then(res=> res.text())
    .then(res=> res.arrayBuffer())
    .then(data=>{
        console.log(data)
        // document.getElementsByTagName('h1')[0].innerHTML=data
        const uint8Array = new Uint8Array(data);
        const decoder = new TextDecoder();
        const result=decoder.decode(uint8Array)
        console.log(uint8Array)
        console.log(result)

    })

console.log('data')