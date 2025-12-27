import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
import { User } from "./userSchema";
import createHttpError from "http-errors";


export const registerUser = async (req: Request, res: Response, next: NextFunction) => {

   try {
      const {name, email, password} = req.body
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
      } else {
         next(createHttpError(500, error.message))
      }
   }
}


export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
      try {
         const {email, password} = req.body

         if (!email || !password) {
            next(createHttpError(400, "All fields are required!."))
         }
         const user = await User.findOne({email: email})

         if (!user) {
            next(createHttpError(400, "User Not found with this email!"))
         }
         const isMatch = await bcrypt.compare(password, user?.password as string)

         if (!isMatch) {
           return next(createHttpError(400, "Icorrect password!"))
         }
         const payload = { sub: user?._id, email: user?.email};

         const token = jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn: "3600s"})
         res.status(200).json({accessToken: token, message: `${user?.name} is logged in successfully`})
      } catch (error) {
         const err = createHttpError(500, error?.message);
         next(err)
      }
}