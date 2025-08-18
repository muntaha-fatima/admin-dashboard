
import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: String,
    author: String,
    description: String,
    imageUrl: String,
    pdfUrl: String,
  
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export const Book = mongoose.models.Book || mongoose.model("Book", bookSchema,);
