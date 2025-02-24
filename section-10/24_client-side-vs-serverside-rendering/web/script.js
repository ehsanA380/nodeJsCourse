const input = document.querySelector("input");

input.addEventListener('change',async(e)=>{
  e.preventDefault()
  const file = e.target.files[0];
  // console.log(e.target)
  // const response = await fetch('http://192.168.29.50/',{
  //   method:"POST",
  //   headers:{
  //     "filename":file.name
  //   },
  //   body:file
  // })
  // const data = await response.text();
  // console.log(data);
//=================================

  const xhr = new XMLHttpRequest();
  xhr.open("POST","http://192.168.29.50",true);
  xhr.setRequestHeader("filename",file.name);
  xhr.addEventListener('load',(e)=>{
    console.log(xhr.response);
  })
  xhr.upload.addEventListener("progress",(e)=>{
    const totalProgress = ((e.loaded/e.total) * 100).toFixed(2) ;
    console.log(totalProgress," %")
  })
  xhr.send(file)
})