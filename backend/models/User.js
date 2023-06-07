const mongoose = require('mongoose')
let user = mongoose.Schema({
    Name:{type:String,required:true,},
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Password:{
        type:String,
        required:true,
    },
    OwnBlogs:{
        type:Array,
        default:[]
    },
    Description:{
        type:String,
        default:"A PenScales  Reader, Contibuter and Supporter"
    }
    
})
const User = mongoose.model('User',user)
module.exports = User