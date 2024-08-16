require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')

const app = express()
app.use(express.json())

connectToDatabase()

app.get("/",(req,res)=>{
  res.status(200).json({
    message : "this is home page"
  //  res.send("hello world")
})
})
// app.get("/about",(req,res)=>{
//   res.json({
//     message:"this is about page"
//   })
// })
app.post("/blog",(req,res)=>{
  console.log(req.body)
  res.status(200).json({
      message : "Blog api hit successfully"
  })
})

app.listen(process.env.PORT,()=>{
  console.log("nodejs project has started")
})
// mongodb+srv://khadkabinisha48:@cluster0.dxm6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0