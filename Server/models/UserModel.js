const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        require:true,
        min: 3,
        max: 20,
        unique: true
    },
    password:{
        type:String,
        require:true,
        min: 6
    },
    email:{
        type:String,
        require:true,
        max:50,
        unique:true
    },
}, {timestamps: true})

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel