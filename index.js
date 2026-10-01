import express from "express";

const app=express();

app.set("view engine","ejs");
app.use(express.urlencoded({extended:false}));

app.get("/from",(req,resp)=>{
resp.render("from");
});

app.post("/submit",(req,resp)=>{
resp.render("showdata",req.body);
});

app.get("/user",(req,resp)=>{
 let arr=["Sandip das","ankan bar","avinandan patra"];
 resp.render("user",{arr:arr,status:true});
});


app.listen(2000);