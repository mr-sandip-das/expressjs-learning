import express from "express";
import path from "path";

const app=express();
app.use(express.urlencoded({extended:false}));
// app.use(express.json());

const abspath=path.resolve("view/home.html");
app.use(express.static("public"));

app.get("/",(req,resp)=>{
    resp.sendFile(abspath);
});

app.get("/login",(req,resp)=>{
    resp.send(`
        <form action="/submit" method="post">

        <h1>Login page</h1>
        <input type="text" placeholder="Enter the email" name="email">
        <input type="text" placeholder="Enter the Password" name="pass">
        <button>Submit</button>
        
        </form>
        `)
});

app.post("/submit",(req,resp)=>{
    console.log(req.body.email);
    console.log(req.body.pass);
    resp.send("Feom is Submited");

});

app.listen(2000);