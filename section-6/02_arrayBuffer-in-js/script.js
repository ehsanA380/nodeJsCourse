const fileInput = document.getElementById('selectFile');
fileInput.addEventListener('change',(event)=>{
    const file = event.target.files[0];

    const reader = new FileReader();
    reader.addEventListener('load',(e)=>{
        const arrayBuffer=e.target.result;
        console.log(arrayBuffer);
    })
    reader.readAsArrayBuffer(file);
})
console.log('check');
