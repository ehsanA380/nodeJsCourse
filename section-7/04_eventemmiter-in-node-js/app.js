import EventEmitter from 'events';

const emitter = new EventEmitter();
// emitter.setMaxListeners(2);

emitter.on('abc',()=>{
    console.log("abc event fired 1")
})

emitter.on('abc',()=>{
    console.log("abc event fired 2")
})
emitter.on('abc',()=>{
    console.log("abc event fired 2")
})
emitter.once('x',()=>{
    console.log("x event fired ")
})


console.log(emitter._events)
emitter.emit('x')
emitter.emit('x')
emitter.emit('x')
console.log(emitter._events)
// console.log(emitter)
