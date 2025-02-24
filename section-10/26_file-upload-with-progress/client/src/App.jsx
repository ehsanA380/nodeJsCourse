import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [directoryItems, setDirectoryItems] = useState([]);
  const [progress, setProgress] = useState(0);

  async function getDirectoryItems() {
    const response = await fetch("http://192.168.29.50/");
    const data = await response.json();
    setDirectoryItems(data);
    // console.log(data)
  }
  useEffect(() => {
    getDirectoryItems();
  }, []);

  async function handleChange(e) {
    const file = e.target.files[0];
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://192.168.29.50/", true);
    xhr.setRequestHeader("filename", file.name);
    xhr.addEventListener("load", () => {
      console.log(xhr.response);
      getDirectoryItems();

    });
    xhr.upload.addEventListener("progress", (e) => {
      const totalProgress = (e.loaded / e.total) * 100;
      setProgress(totalProgress.toFixed(2));
    });
    xhr.send(file);
  }
  async function handleDelete(item){
    const response = await fetch('http://192.168.29.50',{
      method:"DELETE",
      body:item
    })
    const data = await response.text();
    console.log(data)
    getDirectoryItems();

  }
  async function handleRename(filename,newFilename){
    console.log(newFilename,'hiiii')
    // document.body.innerHTML = 'Renaming...';
    const response = await fetch(`http://192.168.29.50/${newFilename}`,{
      method:"PUT",
      body:filename,
    })
    const data = await response.text();
    console.log(data)
    getDirectoryItems();
  }
 


  function inputField(filename,i){
    // Create an input element
    const div = document.getElementById(`${i}`)
    const input = document.createElement('input');
    const submit = document.createElement('button');

    // Set the type and value attributes
    let newFilename=''
    input.type = 'text';
    input.value = filename;
    input.onchange=()=>{
      newFilename = input.value
      // console.log(newFilename)
    }
    submit.type='submit'
    submit.innerText='update'
    submit.onclick=()=>{
      handleRename(filename,newFilename)
      // newFilename = input.value
      console.log(newFilename)
      getDirectoryItems();
      input.remove()
      submit.remove()

    }
    // const newFilename = input.value;

    // Optionally, add the input element to the document
    div.appendChild(input);
    div.appendChild(submit);

  }
  return (
    <>   

      <h1>My Files</h1>
      <input type="file" onChange={handleChange} />
      <p>Progress: {progress}%</p>
      {directoryItems.map((item, i) => (
        <div key={i} id={i}>
          {item} <a href={`http://192.168.29.50/${item}?action=open`}>Open</a>{" "}
          <a href={`http://192.168.29.50/${item}?action=download`}>Download</a>
          <button onClick={()=>{inputField(item,i)}}>rename</button> 
          {/* <button onClick={()=>{inputField(item,i)}}>input</button>  */}
          <button id="renameBtn" onClick={()=>{handleDelete(item)}} >delete</button>
          
          <br />
        </div>
      ))}
    </>
  );
}

export default App;
