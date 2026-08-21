import http from "http";
const server=http.createServer((req,res)=>{
    res.writeHead(403,{"content-type":"text/html"});
    res.write("<h1>Hello World")
    res.end();
})
 
