import express  from "express";
import notFoundHandler from "./middlewares/notFoundHandler.ts";
import globalErrorHandler from "./middlewares/globalErrorHandler.ts";
const app = express()


app.get("/", (req, res) => {
    res.json({message: "Ebook project running successfully"})
})

app.use(notFoundHandler)

app.use(globalErrorHandler)



export default app