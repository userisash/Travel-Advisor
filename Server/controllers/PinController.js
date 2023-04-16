const Pin = require("../models/PinModel")
const bcrypt = require("bcrypt")

const CreatePinController = async(req, res) =>{
    const newPin = new Pin(req.body)
    try{
       await newPin.save()
       return res.status(200).json(newPin)
    }catch(err){
        console.log(err.message);
        res.status(500).json(err.message)
    }
} 


const GetAllPinsController = async(req, res) =>{
    try{
        const pins = await Pin.find()
        res.status(200).json(pins)
    }catch(err){
        res.status(500).json(err)
    }
}


module.exports = {
    CreatePinController,
    GetAllPinsController
}