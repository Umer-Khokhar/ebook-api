import mongoose, { Schema } from "mongoose";
import type { BookTypes } from "./book.types";

export const BookSchema = new Schema<BookTypes>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  author: { type: mongoose.Schema.Types.ObjectId, require: true },
  coverImage: {
    type: String,
    required: true
  },
  pdfFile: {
    type: String,
    required: true
  }
}, {timestamps: true});


export default mongoose.model<BookTypes>("book", BookSchema)