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

const DeletePinsController = async(req, res) =>{
    try {
      const { id } = req.params
  
      // Check if the pin exists
      const existingPin = await PinModel.findById(id)
      if (!existingPin) {
        return res.status(404).json({ message: 'Pin not found' })
      }
  
      // Delete the pin
      await PinModel.findByIdAndDelete(id)
  
      return res.status(200).json({ message: 'Pin deleted successfully' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ message: 'Something went wrong' })
    }
  }

module.exports = {
    CreatePinController,
    GetAllPinsController,
    DeletePinsController
}