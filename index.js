import express from "express";
import { userController } from "./controller/userController.js";

const app=express();

app.set("view engine","ejs");
app.get("/user",userController);

// app.use((err,req,resp,next)=>{
//  resp.send("Try After some time");
// });

app.listen(2000);