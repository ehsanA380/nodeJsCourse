import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [directoryItems, setDirectoryItems] = useState([]);

  async function getDirectoryItem(){
    const response = await fetch('http://192.168.29.50');
    const data = await response.json();
    setDirectoryItems(data)
  }

  useEffect(()=>{
    getDirectoryItem()

  })
 
  return (
    <>
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
