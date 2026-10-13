import express from "express";
import { MongoClient } from "mongodb";

const app=express();
const dbName="college";
const url="mongodb://localhost:27017";
const client=new MongoClient(url);
client.connect();
const db=client.db(dbName);

app.set("view engine","ejs");

app.get("/fetch",async (req,resp)=>{
    const collection=db.collection("students");
    const result=await collection.find().toArray();
    resp.render("student",{result});
});

app.get("/add", (req,resp)=>{
resp.render("add");
});

app.use(express.urlencoded({extended:true}));
app.post("/add-user", async (req,resp)=>{
    let x=req.body;
    const collection=db.collection("students");
    const result=await collection.insertOne(x);
    console.log(result);
    resp.send("data save");
    
});

app.use(express.json());

app.post("/add-api",async (req,resp)=>{
    const {name,email,age}=req.body;
    if(!name || !email || !age){
        resp.send({
            "meassage":"data insert Faild",
            "sucess":false
        })
        return false;
    }

    const collection=db.collection("students");
    const result=await collection.insertOne(req.body);
resp.send({
    "message":"data is done",
    "data":req.body,
    "database-return":result
});
});

app.listen(2000);