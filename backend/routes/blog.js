const express = require('express')
const router = express.Router()
const Post = require('../models/Blog')
router.post('/',async (req,res)=>{
    const post = new Post({
        Name:req.body.name,
        Email:req.body.email,
        Content:req.body.content,
        Title:req.body.title,
        Tag:req.body.tag
    })
    try {
        const Saves = await post.save();
        res.json({Saves})
    } catch (error) {
        res.json({error:error})
    } 
})
router.get('/',async (req,res)=>{
    try{
        console.log("getting blogs")
        const post  = await Post.find()
        res.json(post)
    }
    catch(error){
        res.json({error:error})
    }
})
module.exports  = router