import abc from "express";
import home, { about } from "./pages/home.js";  
const app=abc();

app.get("",(req,resp)=>{
    // resp.send("<title>Sandip das</title>");
    resp.send(home());
});

app.get("/about",(req,resp)=>{
    // resp.send("<title>Sandip das</title>");
    resp.send(about());
});

app.listen(2000)