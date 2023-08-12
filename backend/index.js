const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require("path")
const app = express()
require("dotenv").config()
app.use('/images', express.static(path.join(__dirname, 'images')));
const cors = require('cors')
const multer = require("multer")
const storage = multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,"backend/images")
  },
  filename:(req,file,cb)=>{
    cb(null,req.query.token+".jpeg")
  }
})
const upload = multer({storage:storage})
const BlogsP = require('./routes/blog')
const User = require("./routes/user")
// const password= process.env.local.dbpass
// console.log(password)
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.get('/',()=>{
    console.log('Working')
})
app.use('/api/blogs',BlogsP)
app.use("/api/user",User)
app.post("/api/profile/image",upload.single("image"),(req,res)=>{
  res.send("Image Uploaded")
})
app.listen(5000)
mongoose.connect(`${process.env.DB_PASS}`,()=>{
})