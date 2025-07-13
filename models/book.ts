// models/Book.ts
import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
  {
    title: String,
    author: String,
    description: String,
    imageUrl: String,
    pdfUrl: String,
  
   promoImageUrl: { type: String, default: "" }, // ✅ ADD THIS LINE
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);
export const Book = mongoose.models.Book || mongoose.model("Book", bookSchema,);
