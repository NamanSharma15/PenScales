mongoose = require('mongoose')
let blog  = mongoose.Schema({
    Name:{type:String,required:true,},
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    Title:{
        type:String,
        required:true,
    },
    Content:{
        type:String,
        required:true,
    },
    Tag:{
        type:String,
        required:true,
    },
    Views:{
        type:Number,
        default:0,
    },
    Likes:{
        type:Number,
        default:0,
    },
    Date:{
        type:Date,
        default:Date.now(),
    }
})
module.exports = mongoose.model('Blogs',blog)