const input = document.querySelector("input");
const decoder = new TextDecoder();
input.addEventListener("change", async() => {
  const file = input.files[0];
  const readStream= file.stream();
  // const reader = readStream.getReader();
  for await (const chunk of readStream){
    console.log(chunk)
  }
 

  // while(true){
  //    const {done,value} = await reader.read()
  //    if (done) {
  //     break;
  //    }
  //    console.log(decoder.decode(value))
  //   // console.log(value)
  // }
  // const result1 = await reader.read()
  // console.log(decoder.decode(result1.value))
  // const result2 = await reader.read()
  // console.log(decoder.decode(result2.value))
  // const result3 = await reader.read()
  // console.log(decoder.decode(result3.value))
  // const result4 = await reader.read()
  // console.log(decoder.decode(result4.value))
  // const str =await file.text();
  // console.log(str);
});
