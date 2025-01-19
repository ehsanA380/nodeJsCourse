// const timer = require('./timer.js')
import timer from './timer.js';

// Common JS Modules //
// Synchronous file loading
// file extention optional
// we can load any file in cjs (comman js)
// it is convention to add cjs in the file extention (optional)
//it is optional to set "type"="commanjs" in package.json (optional) 
//in cjs 'this' keyword points to module.exports by defalt
//cjs imports are not hoisted
//top level await is not allowed , it has to wrap in asyn funtion
//only one value can be exported
//we use '__filename,__dirname' to get the filename and dirname
//strict mode is not enabled by default

//ES6 Modules//
//Asynchronous file loading
//file extension mandatory
//we can not load any file, only js and mjs files allowed
//it is convention to add mjs in the file extention (optional)
//we have to set "type"="module" in package.json 
//in mjs "this" keyword is undefined
//mjs imports are  hoisted
//top level await is allowed
//multiple value can be exported
//we use 'import.meta' to get file and directory name;
//strict mode is enabled by default
