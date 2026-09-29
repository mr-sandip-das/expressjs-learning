import express from "express";

const app=express();

function checkmiddleware(req,resp,next){
    if(! req.query.age || req.query.age < 18){
        resp.send("You are not eliagble");
    }
    else{
        next();
    } 
}

function checkmiddleware1(req,resp,next){
    console.log("url is : "+req.url);
    next();
}

// app.use(checkmiddleware);

app.get("/",(req,resp)=>{
    resp.send("Home page");
});

app.get("/login",checkmiddleware,checkmiddleware1,(req,resp)=>{
    resp.send("Login page");
});

app.get("/user",checkmiddleware,(req,resp)=>{
    resp.send("User page");
});

app.listen(2000);