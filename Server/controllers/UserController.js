const User = require("../models/UserModel")
const bcrypt = require("bcrypt")



const CreateUserController = async (req, res) =>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        })

        const user = await newUser.save()
        res.status(200).json(user._id)
    }catch(err){
        res.status(500).json()
    }
}

const GetUsersController = async (req, res) =>{
    try{
        const user = await User.findOne({username:req.body.username})
        !user && res.status(400).json("Wrong Username or Password")

        const validPassword = bcrypt.compare(req.body.password, user.password)
        !validPassword && res.status(400).json("Wrong Username or Password")
        
        res.status(200).json({
            id:user._id,
            username:user.username
        })
    }catch(err){
        res.status(500).json()
    }
}


module.exports = {
    CreateUserController,
    GetUsersController
}