const input = document.getElementById('file');

input.addEventListener('change',async(e)=>{
    console.log(e.target.files[0].name)
    const file = e.target.files[0];
    // console.log(file)
    
    //    const response = await fetch('http://192.168.29.50',{
    //     method:'POST',
    //     headers:{
    //         "Content-Type":`${file.type}`,
    //         "fileName":`${file.name}`
    //     },
    //     body:file
    // });
    // const data = await response.text();
    // console.log(data) 
    
    const xhr = new XMLHttpRequest();
    xhr.open('POST','http://192.168.29.50',true);
    xhr.setRequestHeader('Content-Type', `${file.type}`);
    xhr.setRequestHeader('filename', `${file.name}`);
  // Add an event listener for the progress event
    xhr.upload.addEventListener("progress", (e)=> {
        const percentComplete = (event.loaded / event.total) * 100;
        console.log('Upload Progress:', percentComplete.toFixed(2) + '%');
        
    });

    xhr.send(file)
    
    
    
})