import mongoose from "mongoose"
import { conf } from "./config.ts"


export const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("Successfully connected to the Database.")
        })
        mongoose.connection.on("error", () => {
            console.log("Error in connecting to the database. After the initial connection")
        })
        await mongoose.connect(conf.mongodbUrl as string)
    } catch (error: unknown) {
        const errorMsg = error instanceof Error ? error.message : String(error) 
        console.error("Error connecting to the database", errorMsg)
        process.exit(1)
    }
}