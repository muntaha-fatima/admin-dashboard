import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// import type { NextRequest, NextResponse } from "next/server"

// // Allowed origins (Prod only)
// const allowedOrigins = [
//   "https://frontend-rho-jet-76.vercel.app", // Admin Dashboard (deployed)
//   "https://book-website-rho-sooty.vercel.app", // Book Website (deployed)
//   "http://localhost:3000",
//   "http://localhost:3001",
// ]

// // Utility: decide which origin to allow
// export function getAllowOrigin(origin: string | null) {
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

// // CORS helper
// export function withCORS(res: NextResponse, req: NextRequest) {
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

// // Helper: Get proper host and protocol
// export function getBaseUrl(req: NextRequest) {
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

// // Helper: Convert relative URLs to absolute
// export function makeAbsoluteUrl(url: string | undefined, baseProtocol: string, baseHost: string) {
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
// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }
