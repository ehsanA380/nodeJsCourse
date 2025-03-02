const response = await fetch('http://localhost:3000/api',{
    // method:'POST',
    method:'GET',
    headers:{
        // 'Content-Type':'application/json',
    },
    // body:JSON.stringify({'data':'hello'})
})
const data = await response.json();
const span = document.querySelector('span');
span.innerText=JSON.stringify(data);
console.log(data)