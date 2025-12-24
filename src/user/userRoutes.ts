import express from "express"
const userRouter = express.Router()
import {registerUser, loginUser} from "./userController.ts"

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

export default userRouter