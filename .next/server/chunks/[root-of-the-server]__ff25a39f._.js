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
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
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
"[project]/app/api/book/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "OPTIONS": (()=>OPTIONS),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
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
// Helper function to ensure a directory exists
async function ensureDirectoryExists(path) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["mkdir"])(path, {
            recursive: true
        });
        console.log(`✅ Directory ensured: ${path}`);
    } catch (error) {
        console.error(`❌ Failed to create directory ${path}:`, error);
        throw error;
    }
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
        const publicPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), "public");
        const imageDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(publicPath, "images");
        const pdfDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(publicPath, "pdfs");
        // Ensure directories exist before saving files
        await ensureDirectoryExists(imageDir);
        await ensureDirectoryExists(pdfDir);
        // Get file extensions safely
        const getImageExtension = (name)=>{
            const parts = name.split(".");
            return parts.length > 1 ? parts.pop() : "jpeg";
        };
        const getPdfExtension = (name)=>{
            const parts = name.split(".");
            return parts.length > 1 ? parts.pop() : "pdf";
        };
        // Save image file
        const imageBytes = await imageFile.arrayBuffer();
        const imageBuffer = Buffer.from(imageBytes);
        const imageFileName = `book-image-${Date.now()}.${getImageExtension(imageFile.name)}`;
        const imageFilePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(imageDir, imageFileName);
        await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(imageFilePath, imageBuffer);
        // Save pdf file
        const pdfBytes = await pdfFile.arrayBuffer();
        const pdfBuffer = Buffer.from(pdfBytes);
        const pdfFileName = `book-pdf-${Date.now()}.${getPdfExtension(pdfFile.name)}`;
        const pdfFilePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(pdfDir, pdfFileName);
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
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ff25a39f._.js.map