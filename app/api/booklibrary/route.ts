// // app/api/booklibrary/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/mongodb";
// import { Book } from "../../../models/book";

// // GET: Fetch all books
// export async function GET() {
//   try {
//     await connectToDatabase();
//     const books = await Book.find().sort({ createdAt: -1 });
//     return NextResponse.json(books);
//   } catch (error) {
//     console.error("❌ GET Error:", error);
//     return NextResponse.json({ message: "Server Error" }, { status: 500 });
//   }
// }
// export async function POST(req: NextRequest) {
//   try {
//     await connectToDatabase();
//     const body = await req.json();

//     console.log("Incoming POST:", body); // 👈 debug line

//     const newBook = await Book.create(body);
//     return NextResponse.json(newBook, { status: 201 });
//   } catch (error) {
//     console.error("❌ POST Error:", error);
//     return NextResponse.json({ message: "Server Error" }, { status: 500 });
//   }
// }








// app/api/booklibrary/route.ts

import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Book } from "../../../models/book";

// ✅ Helper to add CORS headers
function withCORS(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "http://localhost:3003"); // change as needed
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

// ✅ GET: Fetch books (with optional featured filter)
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const isFeatured = searchParams.get("featured");

    const filter = isFeatured === "true" ? { isFeatured: true } : {};
    console.log("📍 Applied filter:", filter);

    const books = await Book.find(filter).sort({ createdAt: -1 });

    const host = req.headers.get("host") || "localhost:3001";
    const protocol = req.headers.get("x-forwarded-proto") || "http";

    const booksWithFullUrl = books.map((book: any) => ({
      ...book.toObject(),
      imageUrl: book.imageUrl?.startsWith("http")
        ? book.imageUrl
        : `${protocol}://${host}${book.imageUrl}`,

      pdfUrl: book.pdfUrl?.startsWith("http")
        ? book.pdfUrl
        : `${protocol}://${host}${book.pdfUrl}`,

      promoImageUrl: book.promoImageUrl?.startsWith("http")
        ? book.promoImageUrl
        : `${protocol}://${host}${book.promoImageUrl}`,
    }));

    const response = NextResponse.json(booksWithFullUrl);
    return withCORS(response);
  } catch (error) {
    console.error("❌ GET Error:", error);
    const response = NextResponse.json({ message: "Server Error" }, { status: 500 });
    return withCORS(response);
  }
}

// ✅ POST: Add new book
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const host = req.headers.get("host") || "localhost:3000";
    const protocol = req.headers.get("x-forwarded-proto") || "http";

    const newBook = await Book.create({
      ...body,
      imageUrl: body.imageUrl?.startsWith("http")
        ? body.imageUrl
        : `${protocol}://${host}${body.imageUrl}`,

      pdfUrl: body.pdfUrl?.startsWith("http")
        ? body.pdfUrl
        : `${protocol}://${host}${body.pdfUrl}`,

      promoImageUrl: body.promoImageUrl?.startsWith("http")
        ? body.promoImageUrl
        : `${protocol}://${host}${body.promoImageUrl}`,
    });

    const response = NextResponse.json(newBook, { status: 201 });
    return withCORS(response);
  } catch (error) {
    console.error("❌ POST Error:", error);
    const response = NextResponse.json({ message: "Server Error" }, { status: 500 });
    return withCORS(response);
  }
}

// ✅ OPTIONS: Preflight for CORS
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 204 });
  return withCORS(response);
}
