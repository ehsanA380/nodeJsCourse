// console.time();
const { Worker } = require("worker_threads")
new Worker("./thread1")
new Worker("./thread2")
new Worker("./thread3")
// console.timeEnd()