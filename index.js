 import abc from "express";
 const app= abc();

 app.get("",(req,resp)=>{
    resp.send(`<h1>This is Home Page</h1>
        <br>
        <a href="/login">go to login</a>
        `);
 });

 app.get("/login",(req,resp)=>{
    resp.send(`<form action="/submit" method="post">
        <input type="text">
        <br><br>
        <input type="text">
        <br><br>
        <button>submit</button>
        </form>
        <a href="/">go to Home</a>
        `);
 });

 app.post("/submit",(req,resp)=>{
    resp.send(`<h1>The from is Submited</h1>
        <a href="/">go to Home</a>`);
 });



 app.listen(100);