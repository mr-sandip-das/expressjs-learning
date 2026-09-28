
import express from "express";
import path from "path";

const app=express();
let absPath=path.resolve("view");

let publicPath=path.resolve("public");


app.use(express.static(publicPath));

app.get("/",(req,resp)=>{
resp.sendFile(absPath+"/home.html");
});

app.get("/login",(req,resp)=>{
resp.sendFile(absPath+"/login.html");
});

app.get("/about",(req,resp)=>{ 
resp.sendFile(absPath+"/about.html");
});

app.use((req,resp)=>{
resp.status(404).sendFile(absPath+"/404.html");
});

app.listen(2000);