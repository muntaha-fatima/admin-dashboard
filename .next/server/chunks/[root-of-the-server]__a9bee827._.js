module.exports = {

"[project]/.next-internal/server/app/api/booklibrary/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/lib/mongodb.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // admin-panel/lib/firebase.ts
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// // import { getStorage } from "firebase/storage"
// // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yN",
//   authDomain: "islamic-books-7b70a.firebaseapp.com",
//   projectId: "islamic-books-7b70a",
//   storageBucket: "islamic-books-7b70a.appspot.com",
//   messagingSenderId: "1091480978052",
//   appId: "1:1091480978052:web:946524cb5fa8efecc9b8d1",
//   measurementId: "G-Q23ZXF3N0M"
// }
// const app = initializeApp(firebaseConfig)
// export const db = getFirestore(app)
// // export const storage = getStorage(app)
// // lib/firebase.ts
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"
// import { getAuth } from "firebase/auth"
// import { initializeAppCheck, ReCaptchaV3Provider, DebugProvider } from "firebase/app-check";
// // Use DebugProvider in development
// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
// const appCheck = initializeAppCheck(firebaseApp, {
//   provider: new DebugProvider(),
//   isTokenAutoRefreshEnabled: true,
// });
// // ✅ Tumhara Firebase Project ka Config
// const firebaseConfig = {
//   apiKey: "AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yNpoe8Mc",
//   authDomain: "islamic-books-7b70a.firebaseapp.com",
//   projectId: "islamic-books-7b70a",
//   storageBucket: "islamic-books-7b70a.appspot.com",
//   messagingSenderId: "1091480978052",
//   appId: "1:1091480978052:web:946524cb5fa8efecc9b8d1",
//   measurementId: "G-Q23ZXF3N0M"
// }
// // ✅ Firebase App Initialize
// const app = initializeApp(firebaseConfig)
// // ✅ Services Get
// export const db = getFirestore(app)
// export const storage = getStorage(app)
// export const auth = getAuth(app) // 🔐 Auth Service Export
// lib/firebase.ts
// import { initializeApp } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"
// import { getAuth } from "firebase/auth"
// import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"
// // ✅ Firebase Config
// const firebaseConfig = {
//   apiKey: "AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yNpoe8Mc",
//   authDomain: "islamic-books-7b70a.firebaseapp.com",
//   projectId: "islamic-books-7b70a",
//   storageBucket: "islamic-books-7b70a.appspot.com",
//   messagingSenderId: "1091480978052",
//   appId: "1:1091480978052:web:946524cb5fa8efecc9b8d1",
//   measurementId: "G-Q23ZXF3N0M"
// }
// // ✅ Initialize App
// const app = initializeApp(firebaseConfig)
// // ✅ Enable App Check Debug Token in Dev
// if (typeof window !== 'undefined') {
//  ;(self as any).FIREBASE_APPCHECK_DEBUG_TOKEN = true;
//   initializeAppCheck(app, {
//     provider: new ReCaptchaV3Provider('abcd1234...xyz'),
//     isTokenAutoRefreshEnabled: true,
//   })
// }
// // ✅ Export Firebase Services
// export const db = getFirestore(app)
// export const storage = getStorage(app)
// export const auth = getAuth(app)
// import { initializeApp, getApps } from "firebase/app"
// import { getFirestore } from "firebase/firestore"
// import { getStorage } from "firebase/storage"
// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// }
// // Check if we have real Firebase config
// const hasRealConfig =
//   process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID !== "demo-project"
// if (!hasRealConfig) {
//   console.warn("🔥 Firebase: Using demo configuration. Please add your Firebase environment variables.")
//   console.info("📝 Create a .env.local file in your project root with:")
//   console.info(`
// NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yN
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=islamic-books-7b70a.firebaseapp.com
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=islamic-books-7b70a
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=islamic-books-7b70a.appspot.com
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1091480978052
// NEXT_PUBLIC_FIREBASE_APP_ID=1:1091480978052:web:946524cb5fa8efecc9b8d1
//   `)
// }
// // Initialize Firebase app (only once)
// const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
// // Initialize services
// export const db = getFirestore(app)
// export const storage = getStorage(app)
// // Export config status
// export const isFirebaseConfigured = hasRealConfig
// console.log("🔥 Firebase initialized:", {
//   projectId: firebaseConfig.projectId,
//   configured: hasRealConfig,
// })
// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://shazsabir6:<db_password>@cluster0.h4mfogb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("book library").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
__turbopack_context__.s({
    "connectToDatabase": (()=>connectToDatabase)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI;
const connectToDatabase = async ()=>{
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.readyState === 1) {
        return;
    }
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI);
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        throw error;
    }
};
}}),
"[project]/models/book.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Book": (()=>Book)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const bookSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    title: String,
    author: String,
    description: String,
    imageUrl: String,
    pdfUrl: String,
    isFeatured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Book = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Book || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Book", bookSchema);
}}),
"[project]/models/promoimage.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // models/promo.ts
// import mongoose from "mongoose";
// const promoSchema = new mongoose.Schema(
//   {
//     promoImageUrl: {
//       type: String,
//       required: true,
//     },
//     isActive: {
//       type: Boolean,
//       default: true,
//     },
//   },
//   { timestamps: true }
// );
// export const Promo = mongoose.models.Promo || mongoose.model("Promo", promoSchema);
__turbopack_context__.s({
    "Promo": (()=>Promo)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const promoSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema(// <-- یہاں سے اضافی 'new' اور آخر سے اضافی '()' ہٹا دیا گیا ہے
{
    promoImageUrl: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
const Promo = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Promo || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Promo", promoSchema);
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/app/api/booklibrary/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// import { type NextRequest, NextResponse } from "next/server"
// import { connectToDatabase } from "@/lib/mongodb"
// import { Book } from "@/models/Book"
// import { Promo } from "@/models/promoimage"
// // ✅ Allowed origins (Prod only)
// const allowedOrigins = [
//   "https://frontend-rho-jet-76.vercel.app", // Admin Dashboard (deployed)
//   "https://book-website-rho-sooty.vercel.app", // Book Website (deployed)
//   "http://localhost:3000",
//   "http://localhost:3001",
// ]
// // ✅ Utility: decide which origin to allow
// function getAllowOrigin(origin: string | null) {
//   if (!origin) return "" // No CORS header for non-browser/server-to-server
//   // Allow all origins in development
//   if (process.env.NODE_ENV === "development") {
//     console.log("🔧 Dev mode - Allowing origin:", origin)
//     return origin
//   }
//   // Strict check for production
//   if (allowedOrigins.includes(origin)) {
//     console.log("✅ Prod mode - Allowing origin:", origin)
//     return origin
//   }
//   console.log("❌ Origin not allowed:", origin)
//   return ""
// }
// // ✅ CORS helper
// function withCORS(res: NextResponse, req: NextRequest) {
//   const origin = req.headers.get("origin")
//   const allowOrigin = getAllowOrigin(origin)
//   if (allowOrigin) {
//     res.headers.set("Access-Control-Allow-Origin", allowOrigin)
//     res.headers.set("Vary", "Origin")
//   }
//   res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
//   res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
//   return res
// }
// // ✅ Helper: Get proper host and protocol
// function getBaseUrl(req: NextRequest) {
//   const host = req.headers.get("host")
//   const isDevelopment = process.env.NODE_ENV === "development"
//   if (isDevelopment) {
//     // Local development
//     const protocol = "http"
//     const finalHost = host || "localhost:3000"
//     console.log("🔧 Dev Base URL:", `${protocol}://${finalHost}`)
//     return { protocol, host: finalHost }
//   } else {
//     // Production
//     const protocol = req.headers.get("x-forwarded-proto") || "https"
//     const finalHost = host || "frontend-rho-jet-76.vercel.app"
//     console.log("🚀 Prod Base URL:", `${protocol}://${finalHost}`)
//     return { protocol, host: finalHost }
//   }
// }
// // ✅ Helper: Convert relative URLs to absolute
// function makeAbsoluteUrl(url: string | undefined, baseProtocol: string, baseHost: string) {
//   if (!url) return ""
//   // Already absolute URL
//   if (url.startsWith("http")) {
//     return url
//   }
//   // Make relative URL absolute
//   const absoluteUrl = `${baseProtocol}://${baseHost}${url.startsWith("/") ? url : "/" + url}`
//   console.log("🔗 Converting URL:", url, "→", absoluteUrl)
//   return absoluteUrl
// }
// // ✅ OPTIONS (preflight)
// export async function OPTIONS(req: NextRequest) {
//   console.log("🔄 CORS Preflight request")
//   const res = new NextResponse(null, { status: 204 })
//   return withCORS(res, req)
// }
// export async function GET(req: NextRequest) {
//   try {
//     console.log("📖 GET Books and Promo request")
//     await connectToDatabase()
//     const { searchParams } = new URL(req.url)
//     const isFeatured = searchParams.get("featured")
//     const purpose = searchParams.get("purpose") // 🔍 'book', 'promo', or null (both)
//     const { protocol, host } = getBaseUrl(req)
//     let allItems: any[] = []
//     if (purpose === "promo") {
//       // ✅ Only promo images
//       const promoImages = await Promo.find({ isActive: true }).sort({ createdAt: -1 }).limit(1)
//       console.log("🔍 Promo Images fetched from DB:", promoImages)
//       allItems = promoImages.map((item: any) => ({
//         _id: item._id,
//         promoImageUrl: makeAbsoluteUrl(item.promoImageUrl, protocol, host),
//         contentType: "image",
//         isFeatured: item.isActive,
//       }))
//     } else if (purpose === "book") {
//       // ✅ Only books
//       const bookFilter = isFeatured === "true" ? { isFeatured: true } : {}
//       const books = await Book.find(bookFilter).sort({ createdAt: -1 })
//       allItems = books.map((book: any) => {
//         const bookObj = book.toObject()
//         return {
//           ...bookObj,
//           imageUrl: makeAbsoluteUrl(bookObj.imageUrl, protocol, host),
//           pdfUrl: makeAbsoluteUrl(bookObj.pdfUrl, protocol, host),
//           contentType: "book",
//         }
//       })
//     } else {
//       // ✅ Default: Both books and promo images
//       const bookFilter = isFeatured === "true" ? { isFeatured: true } : {}
//       const books = await Book.find(bookFilter).sort({ createdAt: -1 })
//       const booksWithFullUrl = books.map((book: any) => {
//         const bookObj = book.toObject()
//         return {
//           ...bookObj,
//           imageUrl: makeAbsoluteUrl(bookObj.imageUrl, protocol, host),
//           pdfUrl: makeAbsoluteUrl(bookObj.pdfUrl, protocol, host),
//           contentType: "book",
//         }
//       })
//       const promoImages = await Promo.find({ isActive: true }).sort({ createdAt: -1 })
//       const promoImagesWithFullUrl = promoImages.map((item: any) => ({
//         _id: item._id,
//         promoImageUrl: makeAbsoluteUrl(item.promoImageUrl, protocol, host),
//         contentType: "image",
//         isFeatured: item.isActive,
//       }))
//       allItems = [...booksWithFullUrl, ...promoImagesWithFullUrl]
//     }
//     console.log("✅ Returning", allItems.length, "items")
//     const res = NextResponse.json(allItems, { status: 200 })
//     return withCORS(res, req)
//   } catch (error) {
//     console.error("❌ GET Error:", error)
//     const res = NextResponse.json({ message: "Server Error" }, { status: 500 })
//     return withCORS(res, req)
//   }
// }
// export async function POST(req: NextRequest) {
//   await connectToDatabase()
//   const data = await req.json()
//   try {
//     const { protocol, host } = getBaseUrl(req) // Get base URL for absolute paths
//     if (data.contentType === "image") {
//       // 👉 Promo data
//       const promo = new Promo({
//   promoImageUrl: makeAbsoluteUrl(data.promoImageUrl, protocol, host),
//   isActive: data.isFeatured !== undefined ? data.isFeatured : true, // ✅ Yeh line add karo
// })
//       await promo.save()
//       return NextResponse.json({ success: true, message: "Promo added", promo })
//     } else if (data.contentType === "book") {
//       // 👉 Book data
//       const book = new Book({
//         title: data.title,
//         author: data.author,
//         description: data.description,
//         imageUrl: makeAbsoluteUrl(data.imageUrl, protocol, host),
//         pdfUrl: makeAbsoluteUrl(data.pdfUrl, protocol, host),
//         isFeatured: data.isFeatured,
//         contentType: "book",
//       })
//       await book.save()
//       return NextResponse.json({ success: true, message: "Book added", book })
//     } else {
//       return NextResponse.json({ success: false, message: "Invalid data" }, { status: 400 })
//     }
//   } catch (err) {
//     console.error(err)
//     return NextResponse.json({ success: false, message: "Server error" }, { status: 500 })
//   }
// }
// // ✅ PUT handler (for updating books and promo images)
// export async function PUT(req: NextRequest) {
//   try {
//     console.log("✏️ PUT request")
//     await connectToDatabase()
//     const { searchParams } = new URL(req.url)
//     const id = searchParams.get("id")
//     if (!id) {
//       console.log("❌ Missing entry ID for update")
//       const res = NextResponse.json({ message: "Missing entry ID" }, { status: 400 })
//       return withCORS(res, req)
//     }
//     const body = await req.json()
//     const { contentType, title, author, description, imageUrl, pdfUrl, promoImageUrl, isFeatured } = body
//     console.log("📝 Received data for PUT:", { id, contentType, title, promoImageUrl, isFeatured })
//     const { protocol, host } = getBaseUrl(req)
//     if (contentType === "book") {
//       const updatedData = {
//         title,
//         author,
//         description,
//         imageUrl: makeAbsoluteUrl(imageUrl, protocol, host),
//         pdfUrl: makeAbsoluteUrl(pdfUrl, protocol, host),
//         isFeatured,
//         contentType: "book",
//       }
//       console.log("💾 Updating Book entry with processed data:", updatedData)
//       const updatedBook = await Book.findByIdAndUpdate(id, updatedData, {
//         new: true,
//         runValidators: true,
//       })
//       if (!updatedBook) {
//         console.log("❌ Book entry not found for update:", id)
//         const res = NextResponse.json({ message: "Book entry not found" }, { status: 404 })
//         return withCORS(res, req)
//       }
//       console.log("✅ Book entry updated successfully:", updatedBook._id)
//       const res = NextResponse.json(updatedBook, { status: 200 })
//       return withCORS(res, req)
//     } else if (contentType === "image") {
//       const updatedData = {
//         promoImageUrl: makeAbsoluteUrl(promoImageUrl, protocol, host),
//         isActive: isFeatured, // Use isFeatured from form as isActive for Promo model
//       }
//       console.log("💾 Updating Promo entry with processed data:", updatedData)
//       const updatedPromo = await Promo.findByIdAndUpdate(id, updatedData, {
//         new: true,
//         runValidators: true,
//       })
//       if (!updatedPromo) {
//         console.log("❌ Promo entry not found for update:", id)
//         const res = NextResponse.json({ message: "Promo entry not found" }, { status: 404 })
//         return withCORS(res, req)
//       }
//       console.log("✅ Promo entry updated successfully:", updatedPromo._id)
//       const res = NextResponse.json(updatedPromo, { status: 200 })
//       return withCORS(res, req)
//     } else {
//       throw new Error("Invalid contentType provided. Must be 'book' or 'image'.")
//     }
//   } catch (error) {
//     console.error("❌ PUT Error:", error)
//     const res = NextResponse.json({ message: "Server Error" }, { status: 500 })
//     return withCORS(res, req)
//   }
// }
// // ✅ DELETE handler
// export async function DELETE(req: NextRequest) {
//   try {
//     console.log("🗑️ DELETE request")
//     await connectToDatabase()
//     const { searchParams } = new URL(req.url)
//     const id = searchParams.get("id")
//     const type = searchParams.get("type") // Added type to distinguish between Book and Promo deletion
//     if (!id) {
//       console.log("❌ Missing ID for delete")
//       const res = NextResponse.json({ message: "Missing ID" }, { status: 400 })
//       return withCORS(res, req)
//     }
//     let deletedEntry
//     if (type === "book") {
//       console.log("🔍 Deleting book with ID:", id)
//       deletedEntry = await Book.findByIdAndDelete(id)
//     } else if (type === "promo") {
//       console.log("🔍 Deleting promo with ID:", id)
//       deletedEntry = await Promo.findByIdAndDelete(id)
//     } else {
//       // If type is not specified, try deleting from both for robustness
//       console.log("🔍 Deleting entry (type not specified, trying both models) with ID:", id)
//       deletedEntry = await Book.findByIdAndDelete(id)
//       if (!deletedEntry) {
//         deletedEntry = await Promo.findByIdAndDelete(id) // Try promo if not found in books
//       }
//     }
//     if (!deletedEntry) {
//       console.log("❌ Entry not found for deletion:", id)
//       const res = NextResponse.json({ message: "Entry not found" }, { status: 404 })
//       return withCORS(res, req)
//     }
//     console.log("✅ Entry deleted successfully:", id)
//     const res = NextResponse.json({ message: "Entry deleted successfully" }, { status: 200 })
//     return withCORS(res, req)
//   } catch (error) {
//     console.error("❌ DELETE Error:", error)
//     const res = NextResponse.json({ message: "Server Error" }, { status: 500 })
//     return withCORS(res, req)
//   }
// }
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "OPTIONS": (()=>OPTIONS),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$book$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/book.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$promoimage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/promoimage.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
;
;
const allowedOrigins = [
    "https://frontend-rho-jet-76.vercel.app",
    "https://book-website-rho-sooty.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001"
];
function getAllowOrigin(origin) {
    if (!origin) return "";
    if ("TURBOPACK compile-time truthy", 1) {
        console.log("🔧 Dev mode - Allowing origin:", origin);
        return origin;
    }
    "TURBOPACK unreachable";
}
function withCORS(res, req) {
    const origin = req.headers.get("origin");
    const allowOrigin = getAllowOrigin(origin);
    if (allowOrigin) {
        res.headers.set("Access-Control-Allow-Origin", allowOrigin);
        res.headers.set("Vary", "Origin");
    }
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res;
}
async function POST(req) {
    try {
        const data = await req.formData();
        const imageFile = data.get("image");
        const pdfFile = data.get("pdf");
        if (!imageFile || !pdfFile) {
            console.log("❌ Missing image or pdf file");
            return withCORS(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Both image and pdf files are required"
            }, {
                status: 400
            }), req);
        }
        // Validate file types
        const validImageTypes = [
            "image/jpeg",
            "image/png",
            "image/jpg"
        ];
        if (!validImageTypes.includes(imageFile.type)) {
            console.log("❌ Invalid image file type:", imageFile.type);
            return withCORS(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Only JPEG or PNG images are allowed"
            }, {
                status: 400
            }), req);
        }
        if (pdfFile.type !== "application/pdf") {
            console.log("❌ Invalid pdf file type:", pdfFile.type);
            return withCORS(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Only PDF files are allowed"
            }, {
                status: 400
            }), req);
        }
        // Save image file
        const imageBytes = await imageFile.arrayBuffer();
        const imageBuffer = Buffer.from(imageBytes);
        const imageFileName = `book-image-${Date.now()}.${imageFile.name.split(".").pop()}`;
        const imageFilePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "public/images", imageFileName);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(imageFilePath, imageBuffer);
        // Save pdf file
        const pdfBytes = await pdfFile.arrayBuffer();
        const pdfBuffer = Buffer.from(pdfBytes);
        const pdfFileName = `book-pdf-${Date.now()}.${pdfFile.name.split(".").pop()}`;
        const pdfFilePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "public/pdfs", pdfFileName);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(pdfFilePath, pdfBuffer);
        console.log("✅ Files uploaded:", {
            image: imageFileName,
            pdf: pdfFileName
        });
        return withCORS(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Files uploaded successfully",
            imageUrl: `/images/${imageFileName}`,
            pdfUrl: `/pdfs/${pdfFileName}`
        }, {
            status: 201
        }), req);
    } catch (error) {
        console.error("❌ Upload Error:", error);
        return withCORS(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error"
        }, {
            status: 500
        }), req);
    }
}
async function OPTIONS(req) {
    console.log("🔄 CORS Preflight request for Upload Files");
    const res = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](null, {
        status: 204
    });
    return withCORS(res, req);
}
async function DELETE(req) {
    try {
        console.log("🗑️ DELETE Admin Content request");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const contentType = searchParams.get("contentType");
        if (!id || !contentType) {
            console.log("❌ Missing id or contentType for admin delete");
            const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Missing id or contentType"
            }, {
                status: 400
            });
            return withCORS(res, req);
        }
        // 📚 Handle Book Deletion (Admin Dashboard)
        if (contentType === "book") {
            console.log("🔍 Deleting book with ID for admin:", id);
            const deletedBook = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$book$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Book"].findByIdAndDelete(id);
            if (!deletedBook) {
                console.log("❌ Book not found for admin:", id);
                const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    message: "Book not found"
                }, {
                    status: 404
                });
                return withCORS(res, req);
            }
            console.log("✅ Book deleted successfully by admin:", id);
            const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Book deleted successfully"
            }, {
                status: 200
            });
            return withCORS(res, req);
        }
        // 📷 Handle Promo Deletion (Admin Dashboard)
        if (contentType === "image") {
            console.log("🔍 Deleting promo with ID for admin:", id);
            const deletedPromo = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$promoimage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Promo"].findByIdAndDelete(id);
            if (!deletedPromo) {
                console.log("❌ Promo not found for admin:", id);
                const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    message: "Promo not found"
                }, {
                    status: 404
                });
                return withCORS(res, req);
            }
            console.log("✅ Promo deleted successfully by admin:", id);
            const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Promo deleted successfully"
            }, {
                status: 200
            });
            return withCORS(res, req);
        }
        // ❌ Invalid contentType
        console.log("❌ Invalid contentType for admin:", contentType);
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Invalid contentType"
        }, {
            status: 400
        });
        return withCORS(res, req);
    } catch (error) {
        console.error("❌ DELETE Admin Content Error:", error);
        const res = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Server Error"
        }, {
            status: 500
        });
        return withCORS(res, req);
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a9bee827._.js.map