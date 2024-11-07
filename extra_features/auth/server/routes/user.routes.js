import UserController from "../controllers/user.controller.js"
// const UserController = require("../controllers/user.controller")
import { authenticate } from "../config/jwt.config.js"
//const {authenticate} = require('../config/jwt.config')


module.exports = app =>{
    app.get(`/api/allUsers`, authenticate, UserController.index)
    app.get(`/api/cookie`, UserController.cookie)
    app.post(`/api/register`, UserController.register)
    app.post(`/api/login`, UserController.login)
    app.get(`/api/logout`, UserController.logout)
    app.get(`/api/getUser`,authenticate, UserController.getUser)
}