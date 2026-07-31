//const EventEmitter=require("events");
//const event=new EventEmitter();
// event.on("greet",()=>{
//     console.log("this is event emitter");
// })
//event.once("greet",()=>{
  //  console.log("event trigger only one time");
//})
//event.emit("greet");
//event.emit("greet");
//event.emit("greet");
//event.emit("greet");
class MyEmitter extends EventEmitter{}
const event=new MyEmitter()
event.on("greet",(name)=>{
    console.log('hello ${name}');
})
event.on("exit",()=>{
    console.log("exits mycutom event emitter..");
})
event.emit("greet","cse24");
event.emit(exit);