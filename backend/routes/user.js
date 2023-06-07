const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
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
        res.send("Enter Correct Cradentials")
        return;
    }
    const cpass = await bcrypt.compare(req.body.Password,find.Password)
    if(!cpass){
        res.send("Enter Correct Cradentials")
        return;
    }
    res.json({uid : find._id})
})
module.exports = router