const { CreateUserController, GetUsersController } = require("../controllers/UserController")
const UserRouter = require("express").Router()


UserRouter.post("/register", CreateUserController)
UserRouter.get("/login", GetUsersController)

module.exports = UserRouter