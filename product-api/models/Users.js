const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:Number},
    address:{type:String}
})
//h

module.exports=mongoose.model('User',userSchema)
