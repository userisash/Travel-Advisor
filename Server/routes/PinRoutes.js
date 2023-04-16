const PinRouter = require("express").Router()
const { CreatePinController, GetAllPinsController, DeletePinsController } = require("../controllers/PinController")
const Pin = require("../models/PinModel")



PinRouter.post("/", CreatePinController)
PinRouter.get("/pins", GetAllPinsController)
PinRouter.delete("/del",DeletePinsController)


module.exports = PinRouter

