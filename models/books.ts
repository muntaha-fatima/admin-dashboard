// models/books.ts

import mongoose, { Schema } from "mongoose";

const booksschema = new Schema({
    title: String,
    author: String,
    description: String,
    imageUrl: String,
    pdfUrl: String,
    isFeatured: { type: Boolean, default: false },
    contentType: { type: String, default: "book" }
}, { timestamps: true, collection: "books" }); // ✅ Yahan collection ka naam 'books' specify kiya gaya hai

export const Book = mongoose.models.Book || mongoose.model("Book",booksschema, 'books');