const ex=require("express");
const app=ex()
app.get("",(req,resp)=>{
resp.send("<h1>This is Home Page</h1>");
});

app.get("/about/",(req,resp)=>{
resp.send("<h1>This is About Page</h1>");
});

app.get("/contact",(req,resp)=>{
resp.send("<h1>This is Contact Page</h1>");
});

app.listen(2000);