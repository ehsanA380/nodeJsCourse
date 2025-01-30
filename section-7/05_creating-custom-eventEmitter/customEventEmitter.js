class MyEventEmitter {
    constructor(){
        this._events = {}
    }

    on(eventName,handler){
        if(this._events[eventName]){
            this._events[eventName].push(handler)
        }else{
            this._events[eventName]=[handler]
        }
    }

    emit(eventName,...args){
        if(this._events[eventName]){
            this._events[eventName].forEach(event=>{
                event(...args);
            })
        }
    }
}

const emitter = new MyEventEmitter();
emitter.on('x',()=>{
    console.log('x event fired 1')
})
emitter.on('x',()=>{
    console.log('x event fired 2')
})
emitter.on('y',(a,b ,c, d)=>{
    console.log('y event fired ')
    console.log(a,b,c,d)
})
emitter.emit('y',1,2,3,54)
emitter.emit('x')
// console.log(emitter)