import express from "express";

const app=express();

app.get("/",(req,resp)=>{
    let user=["Sandip","Anita","Rajdeep"];
    let data="<ul>";
    for(let i=0;i<user.length;i++){
        data+=`<a href="user/${user[i]}"><li>${user[i]}</li></a>`;
    }
    data+="</ul>"
    resp.send(data);
});

app.get("/user/:name",(req,resp)=>{
console.log(req.params.name);
resp.send(`This Page Name Is : ${req.params.name}`);
});

app.listen(2000);