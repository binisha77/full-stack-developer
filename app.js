const express = require('express')
const app = express()
app.get("/",(req,res)=>{
  res.json({
    message : "this is home page"
  //  res.send("hello world")
})
})
app.get("/about",(req,res)=>{
  res.json({
    message:"this is about page"
  })
})
app.listen(3000,()=>{
  console.log("nodejs project has started")
})