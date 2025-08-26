module.exports = {

"[project]/.next-internal/server/app/api/book/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/app/api/book/route.ts [app-route] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// import { NextRequest, NextResponse } from "next/server";
// import { writeFile, mkdir } from "fs/promises";
// import { join } from "path";
// const allowedOrigins = [
//   "https://frontend-rho-jet-76.vercel.app",
//   "https://book-website-rho-sooty.vercel.app",
//   "http://localhost:3000",
//   "http://localhost:3001",
// ];
// function getAllowOrigin(origin: string | null) {
//   if (!origin) return "";
//   if (process.env.NODE_ENV === "development") {
//     console.log("🔧 Dev mode - Allowing origin:", origin);
//     return origin;
//   }
//   if (allowedOrigins.includes(origin)) {
//     console.log("✅ Prod mode - Allowing origin:", origin);
//     return origin;
//   }
//   console.log("❌ Origin not allowed:", origin);
//   return "";
// }
// function withCORS(res: NextResponse, req: NextRequest) {
//   const origin = req.headers.get("origin");
//   const allowOrigin = getAllowOrigin(origin);
//   if (allowOrigin) {
//     res.headers.set("Access-Control-Allow-Origin", allowOrigin);
//     res.headers.set("Vary", "Origin");
//   }
//   res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   return res;
// }
// // Helper function to ensure a directory exists
// async function ensureDirectoryExists(path: string) {
//   try {
//     await mkdir(path, { recursive: true });
//     console.log(`✅ Directory ensured: ${path}`);
//   } catch (error) {
//     console.error(`❌ Failed to create directory ${path}:`, error);
//     throw error;
//   }
// }
// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.formData();
//     const imageFile = data.get("image") as File;
//     const pdfFile = data.get("pdf") as File;
//     if (!imageFile || !pdfFile) {
//       console.log("❌ Missing image or pdf file");
//       return withCORS(
//         NextResponse.json({ success: false, message: "Both image and pdf files are required" }, { status: 400 }),
//         req
//       );
//     }
//     // Validate file types
//     const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
//     if (!validImageTypes.includes(imageFile.type)) {
//       console.log("❌ Invalid image file type:", imageFile.type);
//       return withCORS(
//         NextResponse.json({ success: false, message: "Only JPEG or PNG images are allowed" }, { status: 400 }),
//         req
//       );
//     }
//     if (pdfFile.type !== "application/pdf") {
//       console.log("❌ Invalid pdf file type:", pdfFile.type);
//       return withCORS(
//         NextResponse.json({ success: false, message: "Only PDF files are allowed" }, { status: 400 }),
//         req
//       );
//     }
//     const publicPath = join(process.cwd(), "public");
//     const imageDir = join(publicPath, "images");
//     const pdfDir = join(publicPath, "pdfs");
//     // Ensure directories exist before saving files
//     await ensureDirectoryExists(imageDir);
//     await ensureDirectoryExists(pdfDir);
//     // Get file extensions safely
//     const getImageExtension = (name: string) => {
//       const parts = name.split(".");
//       return parts.length > 1 ? parts.pop() : "jpeg";
//     };
//     const getPdfExtension = (name: string) => {
//       const parts = name.split(".");
//       return parts.length > 1 ? parts.pop() : "pdf";
//     };
//     // Save image file
//     const imageBytes = await imageFile.arrayBuffer();
//     const imageBuffer = Buffer.from(imageBytes);
//     const imageFileName = `book-image-${Date.now()}.${getImageExtension(imageFile.name)}`;
//     const imageFilePath = join(imageDir, imageFileName);
//     await writeFile(imageFilePath, imageBuffer);
//     // Save pdf file
//     const pdfBytes = await pdfFile.arrayBuffer();
//     const pdfBuffer = Buffer.from(pdfBytes);
//     const pdfFileName = `book-pdf-${Date.now()}.${getPdfExtension(pdfFile.name)}`;
//     const pdfFilePath = join(pdfDir, pdfFileName);
//     await writeFile(pdfFilePath, pdfBuffer);
//     console.log("✅ Files uploaded:", { image: imageFileName, pdf: pdfFileName });
//     return withCORS(
//       NextResponse.json({
//         success: true,
//         message: "Files uploaded successfully",
//         imageUrl: `/images/${imageFileName}`,
//         pdfUrl: `/pdfs/${pdfFileName}`,
//       }, { status: 201 }),
//       req
//     );
//   } catch (error) {
//     console.error("❌ Upload Error:", error);
//     return withCORS(NextResponse.json({ success: false, message: "Server error" }, { status: 500 }), req);
//   }
// }
// export async function OPTIONS(req: NextRequest) {
//   console.log("🔄 CORS Preflight request for Upload Files");
//   const res = new NextResponse(null, { status: 204 });
//   return withCORS(res, req);
// }
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c1e55da1._.js.map