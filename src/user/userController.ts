import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { User } from "./userSchema";
import createHttpError from "http-errors";
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {

   try {
      let {name, email, password} = req.body
      const hashedPassword = await bcrypt.hash(password, 10)
   
      const createdUser = await User.create({
         name: name,
         email: email,
         password: hashedPassword
      })
      const payload = { sub: createdUser._id, email: createdUser.email}
      const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "3600s"}) 
      return res.json({accessToken: token, email: createdUser.email})
   } catch (error) {
      if (error.code === 11000) {
         const err = createHttpError(400, "Email Already Exists")
         next(err)
      }
      const err = createHttpError(500, error.message)
   }
}