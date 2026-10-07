import express from "express";
import data from "./user.json" with{type:"json"};
const app=express();

app.get("/",(req,resp)=>{
resp.send(data);
});

app.get("/user/:id",(req,resp)=>{
    const id=req.params.id;
    if (id<=data.length){
    let filterdata=data.filter((user)=>user.id==id);
    resp.send(filterdata);
    }
    else{
        resp.send("<h1>Data is not Found Try Letter</h1>");
    }

});

app.get("/username/:name",(req,resp)=>{
  let name=req.params.name;
  let filterdata=data.filter((username)=>username.name.toLowerCase()==name.toLowerCase());
  resp.send(filterdata);
});

app.listen(2000);