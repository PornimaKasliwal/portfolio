const mongoose = require("mongoose")

module.exports = mongoose.model("user", new mongoose.Schema({
 name:{type:String, require:true},
 email:{type:String, require:true, unique:true},
 otp:{type:String},
otpSendOn:{ type: Date },
otpExpiry:{type:Date}
},
{timestamps:true}
))