// const environmentVariables = process.env;
// console.log(environmentVariables);
const {exec} = require('child_process');

exec(`powershell -Command " setx es 'ehsan ansari' /M "`);