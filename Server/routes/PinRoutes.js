const PinRouter = require("express").Router()
const { CreatePinController, GetAllPinsController } = require("../controllers/PinController")
const Pin = require("../models/PinModel")



PinRouter.post("/", CreatePinController)
PinRouter.get("/pins", GetAllPinsController)


module.exports = PinRouter

