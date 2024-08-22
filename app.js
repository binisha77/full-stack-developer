require('dotenv').config()
const express = require('express')
const connectToDatabase = require('./database')
const Blog = require('./model/blogModel')


const app = express()
app.use(express.json())
const {multer, storage } = require('./middleware/multerConfig')
const upload = multer({storage : storage})
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

// app.post("/blog",async (req,res)=>{
//   // const decription = req.body.decription
//   console.log(req.body)
//   const {title,decription,image,subtitle} = req.body
//    if(!title || !description || !image || !subtitle){
//         return res.status(400).json({
//             message : "Please provide title,description,subtitle,image"
//         })
//     }
//  await Blog.create({
//   title : title,
//   decription :decription,
//   subtitle : subtitle,
//   image : image
//  }) 
 

//  })
 app.post("/blog",upload.single('image'), async (req,res)=>{
  const {title,description,subtitle} = req.body
  const filename = req.file.filename
console.log(req.body)
  if(!title || !subtitle || !description){
    return res.status(400).json({
      message : "please provide title,subtitle,description"

    })
  
  }
  await Blog.create({
    title : title,
    subtitle : subtitle,
    description : description,
    image : filename
  })
 

  res.status(200).json({
      message : "Blog api hit successfully"
  })
})
app.get("/blog",async (req,res)=>{
 const blogs =  await Blog.find() //returs array data
 res.status(200).json({
  message : "Blogs fetched sucessfully",
  data : blogs
 })
})
app.use(express.static('./storage'))

app.listen(process.env.PORT,()=>{
  console.log("nodejs project has started")
})
// mongodb+srv://khadkabinisha48:@cluster0.dxm6n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0