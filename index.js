import express from "express";
import { MongoClient } from "mongodb";
const app=express();

const dbName="college";
const url="mongodb://localhost:27017";
const clint=new MongoClient(url);




app.get("/api",async (req,resp)=>{

    await clint.connect();
    const db=clint.db(dbName);
    const collection=db.collection("students");
    const result=await collection.find().toArray();
    resp.send(result);
 
});

app.set("view engine","ejs");

app.get("/ui",async (req,resp)=>{

    await clint.connect();
    const db=clint.db(dbName);
    const collection=db.collection("students");
    const result=await collection.find().toArray();
    resp.render("student",{result});
 
});

app.listen(2000);