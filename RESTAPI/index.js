import express from "express";
const app= express();
app.use(express.json());
let user=[{
    id:1,
    name:"A",
    email:"a@abes.ac.in"

},{
    id:2,
    name:"B",
    email:"b@abes.ac.in"
}];
app.get("/users",(req,res)=>{
    res.json(users);
});
app.post("/users",(req,res)=>{
    const user={
        id:users.length+1,
        name:req.body.name,
        email:req.body.email
    };
    users.push(user);
    res.json(user);
});
app.put("/user/:id",(req,res)=>{
    let user=users.find(u=>u.id==req.params.id);
    user.name=req.body.name;
    user.email=req.body.email;


})
app.listen(3000,()=>{
    console.log("Server is running on http://localhost:8000")
})