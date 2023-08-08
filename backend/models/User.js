const mongoose = require('mongoose')
let user = mongoose.Schema({
    Name:{type:String,required:true,},
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    isVerified:{
        type:Boolean,
        default:false
    }
    ,
    Password:{
        type:String,
        required:true,
    },
    OwnBlogs:{
        type:[String],
        default:[]
    },
    Description:{
        type:String,
        default:"A PenScales  Reader, Contibuter and Supporter"
    },
    Profession:{
        type:String,
        default:"Blogger"
    },
    LikedPosts:{
        type:[String],
        default:[]
    }
})
const User = mongoose.model('User',user)
module.exports = User