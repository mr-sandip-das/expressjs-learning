import express from "express";

const app=express();

// function checkmiddleware(req,resp,next){
//     next();
// }

app.use((req,resp,next)=>{
    next();
});

app.get("/",(req,resp)=>{
    resp.send("Home page");
});

app.get("/about",(req,resp)=>{
    resp.send("About page");
});

app.listen(2000);