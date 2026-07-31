const EventEmitter=require("events");
const event=new EventEmitter();
// event.on("greet",()=>{
//     console.log("this is event emitter");
// })
event.once("greet",()=>{
    console.log("event trigger only one time");
})
event.emit("greet");
event.emit("greet");
event.emit("greet");
event.emit("greet"); 