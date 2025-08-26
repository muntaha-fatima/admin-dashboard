module.exports = {

"[project]/.next-internal/server/app/api/promos/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
// import mongoose from "mongoose";
// const MONGODB_URI = process.env.MONGODB_URI!;
// export const connectToDatabase = async () => {
//   if (mongoose.connection.readyState === 1) {
//     return;
//   }
//   try {
//     await mongoose.connect(MONGODB_URI);
//     console.log("✅ Connected to MongoDB");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//     throw error;
//   }
// };
// lib/mongodb.ts
__turbopack_context__.s({
    "connectToDatabase": (()=>connectToDatabase)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}
let cached = global.mongoose || {
    conn: null,
    promise: null
};
async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
}}),
"[project]/models/promos.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
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
// models/promos.ts
__turbopack_context__.s({
    "Promo": (()=>Promo)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const promoSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    promoImageUrl: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    title: String,
    contentType: {
        type: String,
        default: "image"
    }
}, {
    timestamps: true,
    collection: "promos"
}); // ✅ Yahan collection ka naam 'promos' specify kiya gaya hai
const Promo = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Promo || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Promo", promoSchema, 'promos');
}}),
"[project]/app/api/promos/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "POST": (()=>POST),
    "PUT": (()=>PUT),
    "revalidate": (()=>revalidate),
    "withCORS": (()=>withCORS)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mongodb.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$promos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/models/promos.ts [app-route] (ecmascript)"); // Make sure the path is correct
;
;
;
const allowedOrigins = [
    "https://frontend-rho-jet-76.vercel.app",
    "https://book-website-rho-sooty.vercel.app",
    "http://localhost:3000",
    "http://localhost:3001"
];
function withCORS(res, req) {
    const origin = req.headers.get("origin");
    if (origin && (allowedOrigins.includes(origin) || ("TURBOPACK compile-time value", "development") === "development")) {
        res.headers.set("Access-Control-Allow-Origin", origin);
    }
    res.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res;
}
const revalidate = 0;
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const body = await req.json();
        const newPromo = new __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$promos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Promo"](body);
        await newPromo.save();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: newPromo
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: error.message
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const promos = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$promos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Promo"].find({});
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(promos, {
            status: 200
        });
    } catch (error) {
        console.error("GET error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error"
        }, {
            status: 500
        });
    }
}
async function PUT(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        const data = await req.json();
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "ID missing"
            }, {
                status: 400
            });
        }
        const updatedPromo = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$promos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Promo"].findByIdAndUpdate(id, data, {
            new: true
        });
        if (!updatedPromo) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Promo not found"
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Promo updated",
            data: updatedPromo
        }, {
            status: 200
        });
    } catch (error) {
        console.error("PUT error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error"
        }, {
            status: 500
        });
    }
}
async function DELETE(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mongodb$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToDatabase"])();
        const { searchParams } = new URL(req.url);
        const id = searchParams.get("id");
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "ID missing"
            }, {
                status: 400
            });
        }
        const deletedPromo = await __TURBOPACK__imported__module__$5b$project$5d2f$models$2f$promos$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Promo"].findByIdAndDelete(id);
        if (!deletedPromo) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Promo not found"
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Promo deleted"
        }, {
            status: 200
        });
    } catch (error) {
        console.error("DELETE error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Server error"
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__b5147942._.js.map