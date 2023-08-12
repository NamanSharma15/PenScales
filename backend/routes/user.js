const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
const Blog = require('../models/Blog')
const nodemailer = require("nodemailer")
const otp = require("otp-generator")
const fs = require("fs")
router.post("/signup",async (req,res)=>{
    const {Email} = req.body
    const find = await User.findOne({Email})
    if(find){
        res.send("User Already Exists")
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.Password, salt)
    const post = new User({
        Name : req.body.Name,
        Email : req.body.Email,
        Password:secPass
    })
    try{
        const newUser = await post.save()
        res.json({newUser})
    }catch(error){
        res.status(400)
        res.json({error:error})
    }
})
router.post("/login",async(req,res)=>{
    const find = await User.findOne({Email:req.body.Email})
    if(!find){
        res.json({err:"User doesn't exists"})
        return;
    }
    const cpass = await bcrypt.compare(req.body.Password,find.Password)
    if(!cpass){
        res.json({err:"Wrong Cradentials"})
        return;
    }
    res.json({uid : find._id})
})
router.post("/getuser",async(req,res)=>{
    const find  = await User.findById(req.body.UID)
    if(!find){
        res.send("Enter Correct Cradentials")
        return;
    }
    res.json(find)
})
router.post("/getarray",async(req,res)=>{
    console.log(req.body.uid)
    const fu = await User.findById(req.body.uid)
    res.json({array:fu.OwnBlogs})
})
router.patch("/setblog",async (req,res)=>{
    const fu = await User.findByIdAndUpdate(req.body.uid,{OwnBlogs:req.body.arr})
    res.json({success:"success"})
})
router.post("/myposts",async (req,res)=>{
    const d = await User.findById(req.body.uid)
    arr = d.OwnBlogs
    s = []
    for(const k of arr){
        let f = await Blog.findById(k)
        s.push({"Id":f._id,"Title":f.Title})
    }
    res.json({"s":s})
})
router.patch("/likePosts",async (req,res)=>{
    try{
        const post = await User.updateOne({_id:req.body.Id},req.body.query)
        res.status(200).send({"success":true})
    }catch(err){
        res.status(400).send(err)
    }
})
router.post("/generateOtp",async (req,res)=>{
    try{
        let currentOtp = otp.generate(6,{upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets:false});
        const transporter = nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:"penscalesblogs@gmail.com",
                pass:"xktcfcywpvxkvzal"
            }
        })
        const mailConfig = {
            from:"penscalesblogs@gmail.com",
            to:req.body.Email,
            subject:"Penscales Verification mail",
            html:`<h2>Verification Mail</h2><p>To verify your Penscales account Enter the following OTP <br> <b>${currentOtp}<b><p>`
        }
        transporter.sendMail(mailConfig,(err,info)=>{
            if(err){
                console.log(err)
                res.status(500).json({error:err})
            }
        })
        res.json({otp:currentOtp})
    }catch(err){
        res.status(500).json({error:err})
    }
})
router.delete("/deleteUser",async(req,res)=>{
    try {
        const user  = await User.findByIdAndDelete(req.body.uid)
        fs.unlinkSync(`images/${req.body.uid}.jpeg`)
        res.json({success:true})
    } catch (error) {
        res.status(500).json({err:error})
    }
})
module.exports = router