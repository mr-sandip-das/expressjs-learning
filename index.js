import express from "express";
import { Collection, MongoClient } from "mongodb";

const dbName="college";
const url="mongodb://localhost:27017";
const clint=new MongoClient(url);

async function dbConnect(){
await clint.connect();
const db=clint.db(dbName)
const collection=db.collection("students");
const result = await collection.find().toArray();
console.log(result);
}
dbConnect();

const app=express();

app.listen(2000);