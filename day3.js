//Asynchronous js using async/await
// async function test(){
//    console.log("2:message");
//    console.log("3:message");
//    console.log("4:message");
// }
//   console.log("1:message");
//   test()
//    console.log("5:message");
   //create promises that resolve with Assisgnment submitted
   //and print using then(),reject with submission failed
 //async function that display user data
//   async function test(){
//   await console.log("ID");
//      await console.log("MANGER");
//      console.log("27YEAR");
//  }
//  console.log("FROM ABES");
//  test()
//  console.log("5");
 async function data() {
    await console.log("2:message");
   const response=fetch("./studentdata.json");
   console.log(response.status);
   const std=(await response).json();
   return std;
   await console.log("3:message");
   console.log("4:message");    
 }
 console.log("1:message");
 data()
.then(()=>{
console.log(res);
}).catch(()=>{
    console.log()
})
