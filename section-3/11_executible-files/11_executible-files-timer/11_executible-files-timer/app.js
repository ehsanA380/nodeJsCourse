const { exec } = require('child_process');


// let time = 1;
const test = process.argv[2];
console.log(`hello, I am Ehsan Ansari , I am executing your ${test} file`);
console.log(`--------------Execution is starting from here--------------`);

// setInterval(() => {
//   console.log(time++);
// }, 100);

// console.log(process.argv[2]);
// exec('node test.js',()=>{});
// Run test.js using exec
const childProcess = exec(`node ${test}`, (error, stdout, stderr) => {
  if (error) {
      console.error(`Error: ${error.message}`);
      return;
  }
  if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
  }
  // console.log(`${stdout}`);
  // anotherFile.js
  
});

// Keep the main process alive to capture setInterval output
childProcess.stdout.on('data', (data) => {
  const d = data;
  // console.log(d);
  process.stdout.write(`${data}`);
  
});

childProcess.stderr.on('data', (data) => {
  console.error(`Error from test.js: ${data}`);
});