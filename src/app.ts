import express  from "express";
import notFoundHandler from "./middlewares/notFoundHandler.ts";
import globalErrorHandler from "./middlewares/globalErrorHandler.ts";
import userRouter from "./user/userRoutes.ts";
const app = express()


app.use(express.json())

app.get("/", (req, res) => {
    res.json({message: "Ebook project running successfully"})
})

app.use("/api/users", userRouter)

app.use(notFoundHandler)

app.use(globalErrorHandler)



export default app