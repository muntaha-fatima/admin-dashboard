


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


// // app/api/booklibrary/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/mongodb";
// import { Book } from "@/models/book"; // <- apne path ke mutabiq adjust kar lena

// // ✅ Allowed origins (Dev + Prod)
// const allowedOrigins = [
//   "https://frontend-rho-jet-76.vercel.app",    // Admin Dashboard (deployed)
//   "https://book-website-rho-sooty.vercel.app", // Book Website (deployed)
//   "http://localhost:3001",                      // Local backend / frontend
//   "http://localhost:3002",                      // Local frontend (your case)
// ];

// function getAllowOrigin(origin: string | null) {
//   if (!origin) return "";
//   if (process.env.NODE_ENV === "development") return origin; // Allow all in dev
//   if (allowedOrigins.includes(origin)) return origin;
//   return "";
// }

//   // 🔧 Dev convenience (optional): uncomment to allow everything in dev
//   // if (process.env.NODE_ENV !== "production") return origin;


// function withCORS(res: NextResponse, req: NextRequest) {
//   const origin = req.headers.get("origin");
//   const allowOrigin = getAllowOrigin(origin);

//   if (allowOrigin) {
//     res.headers.set("Access-Control-Allow-Origin", allowOrigin);
//     res.headers.set("Vary", "Origin"); // good practice
//   }
//   res.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
//   res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   // res.headers.set("Access-Control-Allow-Credentials", "true"); // only if you really need cookies

//   return res;
// }

// // ✅ OPTIONS (preflight)
// export async function OPTIONS(req: NextRequest) {
//   const res = new NextResponse(null, { status: 204 });
//   return withCORS(res, req);
// }

// // ✅ GET handler
// export async function GET(req: NextRequest) {
//   try {
//     await connectToDatabase();

//     const { searchParams } = new URL(req.url);
//     const isFeatured = searchParams.get("featured");
//     const filter = isFeatured === "true" ? { isFeatured: true } : {};

//     const books = await Book.find(filter).sort({ createdAt: -1 });

//     const host = req.headers.get("host") || "";
//     const protocol = req.headers.get("x-forwarded-proto") || "https";

//     const booksWithFullUrl = books.map((book: any) => ({
//       ...book.toObject(),
//       imageUrl: book.imageUrl
//         ? (book.imageUrl.startsWith("http")
//             ? book.imageUrl
//             : `${protocol}://${host}${book.imageUrl}`)
//         : "",
//       pdfUrl: book.pdfUrl
//         ? (book.pdfUrl.startsWith("http")
//             ? book.pdfUrl
//             : `${protocol}://${host}${book.pdfUrl}`)
//         : "",
//       promoImageUrl: book.promoImageUrl
//         ? (book.promoImageUrl.startsWith("http")
//             ? book.promoImageUrl
//             : `${protocol}://${host}${book.promoImageUrl}`)
//         : "",
//     }));

//     const res = NextResponse.json(booksWithFullUrl, { status: 200 });
//     return withCORS(res, req);
//   } catch (error) {
//     console.error("❌ GET Error:", error);
//     const res = NextResponse.json({ message: "Server Error" }, { status: 500 });
//     return withCORS(res, req);
//   }
// }

// // ✅ POST handler
// export async function POST(req: NextRequest) {
//   try {
//     await connectToDatabase();
//     const body = await req.json();

//     const host = req.headers.get("host") || "frontend-rho-jet-76.vercel.app";
//     const protocol = req.headers.get("x-forwarded-proto") || "https";

//     const newBook = await Book.create({
//       ...body,
//       imageUrl: body.imageUrl
//         ? (body.imageUrl.startsWith("http")
//             ? body.imageUrl
//             : `${protocol}://${host}${body.imageUrl}`)
//         : "",
//       pdfUrl: body.pdfUrl
//         ? (body.pdfUrl.startsWith("http")
//             ? body.pdfUrl
//             : `${protocol}://${host}${body.pdfUrl}`)
//         : "",
//       promoImageUrl: body.promoImageUrl
//         ? (body.promoImageUrl.startsWith("http")
//             ? body.promoImageUrl
//             : `${protocol}://${host}${body.promoImageUrl}`)
//         : "",
//     });

//     const res = NextResponse.json(newBook, { status: 201 });
//     return withCORS(res, req);
//   } catch (error) {
//     console.error("❌ POST Error:", error);
//     const res = NextResponse.json({ message: "Server Error" }, { status: 500 });
//     return withCORS(res, req);
//   }
// }

// // ✅ DELETE handler
// export async function DELETE(req: NextRequest) {
//   try {
//     await connectToDatabase();

//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get("id");

//     if (!id) {
//       const res = NextResponse.json({ message: "Missing book ID" }, { status: 400 });
//       return withCORS(res, req);
//     }

//     const deletedBook = await Book.findByIdAndDelete(id);

//     if (!deletedBook) {
//       const res = NextResponse.json({ message: "Book not found" }, { status: 404 });
//       return withCORS(res, req);
//     }

//     const res = NextResponse.json({ message: "Book deleted successfully" }, { status: 200 });
//     return withCORS(res, req);
//   } catch (error) {
//     console.error("❌ DELETE Error:", error);
//     const res = NextResponse.json({ message: "Server Error" }, { status: 500 });
//     return withCORS(res, req);
//   }
// }


// // app/api/booklibrary/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import { connectToDatabase } from "@/lib/mongodb";
// import { Book } from "@/models/book";

// // GET: Get all books
// export async function GET() {
//   try {
//     await connectToDatabase();
//     const books = await Book.find();
//     return NextResponse.json(books);
//   } catch (error) {
//     return NextResponse.json({ error: "Error fetching books" }, { status: 500 });
//   }
// }

// // POST: Create a new book
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     await connectToDatabase();
//     const newBook = await Book.create(body);
//     return NextResponse.json(newBook, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: "Error creating book" }, { status: 500 });
//   }
// }







// app/api/booklibrary/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Book } from "@/models/book";

// ✅ Allowed origins (Prod only)
const allowedOrigins = [
  "https://frontend-rho-jet-76.vercel.app",    // Admin Dashboard (deployed)
  "https://book-website-rho-sooty.vercel.app", // Book Website (deployed)
  "http://localhost:3000",
  "http://localhost:3001",

];

// ✅ Utility: decide which origin to allow
function getAllowOrigin(origin: string | null) {
  if (!origin) return ""; // No CORS header for non-browser/server-to-server
  // Allow all origins in development
  if (process.env.NODE_ENV === "development") {
    console.log("Allowing origin in dev:", origin); // Debugging
    return origin;
  }
  // Strict check for production
  if (allowedOrigins.includes(origin)) {
    console.log("Allowing origin in prod:", origin); // Debugging
    return origin;
  }
  console.log("Origin not allowed:", origin); // Debugging
  return "";
}

// ✅ CORS helper
function withCORS(res: NextResponse, req: NextRequest) {
  const origin = req.headers.get("origin");
  const allowOrigin = getAllowOrigin(origin);

  if (allowOrigin) {
    res.headers.set("Access-Control-Allow-Origin", allowOrigin);
    res.headers.set("Vary", "Origin");
  }
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  return res;
}

// ✅ OPTIONS (preflight)
export async function OPTIONS(req: NextRequest) {
  const res = new NextResponse(null, { status: 204 });
  return withCORS(res, req);
}

// ✅ GET handler
export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const isFeatured = searchParams.get("featured");
    const filter = isFeatured === "true" ? { isFeatured: true } : {};

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

    const res = NextResponse.json(booksWithFullUrl, { status: 200 });
    return withCORS(res, req);
  } catch (error) {
    console.error("❌ GET Error:", error);
    const res = NextResponse.json({ message: "Server Error" }, { status: 500 });
    return withCORS(res, req);
  }
}

// ✅ POST handler
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

    const res = NextResponse.json(newBook, { status: 201 });
    return withCORS(res, req);
  } catch (error) {
    console.error("❌ POST Error:", error);
    const res = NextResponse.json({ message: "Server Error" }, { status: 500 });
    return withCORS(res, req);
  }
}

// ✅ DELETE handler
export async function DELETE(req: NextRequest) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      const res = NextResponse.json({ message: "Missing book ID" }, { status: 400 });
      return withCORS(res, req);
    }

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      const res = NextResponse.json({ message: "Book not found" }, { status: 404 });
      return withCORS(res, req);
    }

    const res = NextResponse.json({ message: "Book deleted successfully" }, { status: 200 });
    return withCORS(res, req);
  } catch (error) {
    console.error("❌ DELETE Error:", error);
    const res = NextResponse.json({ message: "Server Error" }, { status: 500 });
    return withCORS(res, req);
  }
}