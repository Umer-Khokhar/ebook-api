import express from "express"
const userRouter = express.Router()
import {registerUser} from "./userController.ts"

userRouter.post("/register", registerUser)

export default userRouter