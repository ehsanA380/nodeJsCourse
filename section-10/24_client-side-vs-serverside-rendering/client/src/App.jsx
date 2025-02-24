import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [directoryItems, setDirectoryItems] = useState([]);
  const [progress, setProgress] = useState('');

  async function getDirectoryItem(){
    const response = await fetch('http://192.168.29.50');
    const data = await response.json();
    setDirectoryItems(data)
  }

  function fileHandle(e){
    const file = e.target.files[0];
    // console.log(file)
    const xhr = new XMLHttpRequest();
    xhr.open("POST","http://192.168.29.50",true);
    xhr.setRequestHeader("filename",file.name);
    xhr.addEventListener('load',(e)=>{
      console.log(xhr.response);
    })
    xhr.upload.addEventListener("progress",(e)=>{
      const totalProgress = ((e.loaded/e.total) * 100).toFixed(2) ;
      // console.log(totalProgress," %")
      const progress = totalProgress + '%';
      setProgress(progress)
    })
    xhr.send(file)
  }

  useEffect(()=>{
    getDirectoryItem()

  },[])
 
  return (
    <>
    <input type="file" onChange={()=>fileHandle(event)} />
    <h4>progress: {progress}</h4>
    <h1>My Fies</h1>
     {directoryItems.map((item,i)=>(
      
        <div key={i}>
        {++i}. {item}<a href={`http://192.168.29.50/${item}?action=open`}>open</a> <a href={`http://192.168.29.50/${item}?action=download`}>download</a>
        </div>
      
     ))}
    </>
  )
}

export default App
