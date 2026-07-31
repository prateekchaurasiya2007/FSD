//callback:function
// function hello(n1,n2,callback){
// console.log("Hello world");
// callback();    
// }

// let a=10;
// let b=20;
// console.log(hello(a,b,sayHi));
// console.log(hello(a,b,sayHello()))
// console.log(hello(a,b0,function demo(){
//   console.log("callback is calling")}));
// function sayHi(){
//     console.log("callback function");
// }
// sayHi();
// function sayHello(){
//     console.log("this is 2nd callback function")
// }
// sayHi();
//Promises
// const PromiseOne=new Promise((resolve,reject)=>{
// console.log("successfull data passed.....")
// });
// PromiseOne.then((result)=>{
//     console.log(result);

// }).catch(()=>{

// }
new Promise(function(resolve,reject){
setTimeout(function(){
    let msg=true;
    if(!msg)
    console.log("asynchronous task...");
    resolve();
})    

}).then().catch()