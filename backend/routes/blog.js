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
        const post  = await Post.find()
        res.json(post)
    }
    catch(error){
        res.json({error:error})
    }
})
router.post('/byId/',async (req,res)=>{
    try{
        const post  = await Post.findById(req.body._id)
        res.json(post)
    }
    catch(error){
        res.json({error:error})
    }
})
router.get('/',async (req,res)=>{
    try{
        const post  = await Post.find()
        res.json(post)
    }
    catch(error){
        res.json({error:error})
    }
})
router.patch("/update",async (req,res)=>{
    try{
        const post = await Post.updateOne({_id:req.body.Id},req.body.query)
        res.status(200).send({"success":true})
    }catch(err){
        res.status(400).send(err)
    }
})
module.exports  = router