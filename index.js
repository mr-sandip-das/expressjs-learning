
import express from "express";
import path from "path";

const app=express();

app.get("/",(req,resp)=>{
let absPath=path.resolve("view/home.html");
console.log(absPath);
resp.sendFile(absPath);
});

app.get("/login",(req,resp)=>{
let absPath=path.resolve("view/login.html");
console.log(absPath);
resp.sendFile(absPath);
});

app.get("/about",(req,resp)=>{
let absPath=path.resolve("view/about.html");   
console.log(absPath);
resp.sendFile(absPath);
});

app.listen(2000)