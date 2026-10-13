import express from "express";
import { MongoClient, ObjectId } from "mongodb";

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

app.delete("/delete/:id",async (req,resp)=>{

    let id=req.params.id;
    const collection=db.collection("students");
    const result=await collection.deleteOne({_id: new ObjectId(id)});
    if(result){
        resp.send({
            "message":"Data Delete Done",
            "sucess":true
        })
    }
    else{
        resp.send({
            "message":"Data not Delete try again letter",
            "sucess":false
        })
    }
});


app.get("/ui/delete/:id",async (req,resp)=>{

    let id=req.params.id;
    const collection=db.collection("students");
    const result=await collection.deleteOne({_id: new ObjectId(id)});
    if(result){
        resp.send("<h1>Data Deleted Sucessfull</h1>");
    }
    else{
        resp.send("<h1>Data not Deleted</h1>");
    }
});

app.listen(2000);