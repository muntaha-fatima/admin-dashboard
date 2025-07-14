


// app/api/booklibrary/route.ts

// import { NextRequest, NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/mongodb";
// import { Book } from "../../../models/book";

// // ✅ Helper to add CORS headers
// function withCORS(response: NextResponse) {
//   response.headers.set("Access-Control-Allow-Origin", "https://frontend-rho-jet-76.vercel.app"); // change as needed
//   response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   response.headers.set("Access-Control-Allow-Headers", "Content-Type");
//   return response;
// }

// // ✅ GET: Fetch books (with optional featured filter)
// export async function GET(req: NextRequest) {
//   try {
//     await connectToDatabase();

//     const { searchParams } = new URL(req.url);
//     const isFeatured = searchParams.get("featured");

//     const filter = isFeatured === "true" ? { isFeatured: true } : {};
//     console.log("📍 Applied filter:", filter);

//     const books = await Book.find(filter).sort({ createdAt: -1 });

//     const host = req.headers.get("host") || "localhost:3001";
//     const protocol = req.headers.get("x-forwarded-proto") || "http";

//     const booksWithFullUrl = books.map((book: any) => ({
//       ...book.toObject(),
//       imageUrl: book.imageUrl?.startsWith("http")
//         ? book.imageUrl
//         : `${protocol}://${host}${book.imageUrl}`,

//       pdfUrl: book.pdfUrl?.startsWith("http")
//         ? book.pdfUrl
//         : `${protocol}://${host}${book.pdfUrl}`,

//       promoImageUrl: book.promoImageUrl?.startsWith("http")
//         ? book.promoImageUrl
//         : `${protocol}://${host}${book.promoImageUrl}`,
//     }));

//     const response = NextResponse.json(booksWithFullUrl);
//     return withCORS(response);
//   } catch (error) {
//     console.error("❌ GET Error:", error);
//     const response = NextResponse.json({ message: "Server Error" }, { status: 500 });
//     return withCORS(response);
//   }
// }

// // ✅ POST: Add new book
// export async function POST(req: NextRequest) {
//   try {
//     await connectToDatabase();
//     const body = await req.json();

//     const host = req.headers.get("host") || "https://frontend-rho-jet-76.vercel.app";
//     const protocol = req.headers.get("x-forwarded-proto") || "http";

//     const newBook = await Book.create({
//       ...body,
//       imageUrl: body.imageUrl?.startsWith("http")
//         ? body.imageUrl
//         : `${protocol}://${host}${body.imageUrl}`,

//       pdfUrl: body.pdfUrl?.startsWith("http")
//         ? body.pdfUrl
//         : `${protocol}://${host}${body.pdfUrl}`,

//       promoImageUrl: body.promoImageUrl?.startsWith("http")
//         ? body.promoImageUrl
//         : `${protocol}://${host}${body.promoImageUrl}`,
//     });

//     const response = NextResponse.json(newBook, { status: 201 });
//     return withCORS(response);
//   } catch (error) {
//     console.error("❌ POST Error:", error);
//     const response = NextResponse.json({ message: "Server Error" }, { status: 500 });
//     return withCORS(response);
//   }
// }

// // ✅ OPTIONS: Preflight for CORS
// export async function OPTIONS() {
//   const response = new NextResponse(null, { status: 204 });
//   return withCORS(response);
// }



import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Book } from "../../../models/book";

// ✅ Allowed origins (Admin + Book Website)
const allowedOrigins = [
  "https://frontend-rho-jet-76.vercel.app",    // Admin Dashboard
  "https://book-website-rho-sooty.vercel.app"  // Book Library Frontend
];

// ✅ CORS helper
function withCORS(response: NextResponse, req: NextRequest) {
  const origin = req.headers.get("origin") || "";
  if (allowedOrigins.includes(origin)) {
    response.headers.set("Access-Control-Allow-Origin", origin);
  }
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}

// ✅ GET handler (safe image & URL mapping)
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const isFeatured = searchParams.get("featured");
    const filter = isFeatured === "true" ? { isFeatured: true } : {};

    console.log("📍 Applied filter:", filter);
    const books = await Book.find(filter).sort({ createdAt: -1 });

    const host = req.headers.get("host") || "";
    const protocol = req.headers.get("x-forwarded-proto") || "https";

    const booksWithFullUrl = books.map((book: any) => ({
      ...book.toObject(),
      imageUrl: book.imageUrl
        ? (book.imageUrl.startsWith("http")
            ? book.imageUrl
            : `${protocol}://${host}${book.imageUrl}`)
        : "",

      pdfUrl: book.pdfUrl
        ? (book.pdfUrl.startsWith("http")
            ? book.pdfUrl
            : `${protocol}://${host}${book.pdfUrl}`)
        : "",

      promoImageUrl: book.promoImageUrl
        ? (book.promoImageUrl.startsWith("http")
            ? book.promoImageUrl
            : `${protocol}://${host}${book.promoImageUrl}`)
        : "",
    }));

    return withCORS(NextResponse.json(booksWithFullUrl), req);
  } catch (error) {
    console.error("❌ GET Error:", error);
    return withCORS(NextResponse.json({ message: "Server Error" }, { status: 500 }), req);
  }
}

// ✅ POST handler (safe URL mapping)
export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const host = req.headers.get("host") || "frontend-rho-jet-76.vercel.app";
    const protocol = req.headers.get("x-forwarded-proto") || "https";

    const newBook = await Book.create({
      ...body,
      imageUrl: body.imageUrl
        ? (body.imageUrl.startsWith("http")
            ? body.imageUrl
            : `${protocol}://${host}${body.imageUrl}`)
        : "",

      pdfUrl: body.pdfUrl
        ? (body.pdfUrl.startsWith("http")
            ? body.pdfUrl
            : `${protocol}://${host}${body.pdfUrl}`)
        : "",

      promoImageUrl: body.promoImageUrl
        ? (body.promoImageUrl.startsWith("http")
            ? body.promoImageUrl
            : `${protocol}://${host}${body.promoImageUrl}`)
        : "",
    });

    return withCORS(NextResponse.json(newBook, { status: 201 }), req);
  } catch (error) {
    console.error("❌ POST Error:", error);
    return withCORS(NextResponse.json({ message: "Server Error" }, { status: 500 }), req);
  }
}

// ✅ OPTIONS handler
export async function OPTIONS(req: NextRequest) {
  const response = new NextResponse(null, { status: 204 });
  return withCORS(response, req);
}
