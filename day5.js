//Event 
//EventEmitter is class in which we have to use emit("event emit program") method for trigger./create/fire/ event and on ("emit param",callback) 
//Program 1 and 2
//emit() on()
const EventEmitter=require("event");
const event=new EventEmitter();
event.emit("greet",()=>{
    console.log("this is event emitter");
});
event.emit("greet");
event.emit("greet");
event.emit("greet");
event.emit("greet");
event.emit("greet");
