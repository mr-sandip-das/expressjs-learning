import express from "express";
const app=express();

app.set("view engine","ejs");

app.get("/",(req,resp)=>{
    resp.render("home",{name:"sandip das",email:"sandip@gmail.com"});
});

app.listen(2000)