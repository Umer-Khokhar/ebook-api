import express from "express"
import { createBook, deleteBook, getBook, getBooks, updateBook } from "./bookControllers"

const BookRouter = express.Router()


BookRouter.get("/", getBooks)
BookRouter.get("/:id", getBook)
BookRouter.post("/", createBook)
BookRouter.put("/:id", updateBook)
BookRouter.delete("/:id", deleteBook)