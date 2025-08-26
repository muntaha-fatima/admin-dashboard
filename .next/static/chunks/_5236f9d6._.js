(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/label.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Label": (()=>Label)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/input.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Input": (()=>Input)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]", "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Card;
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = CardHeader;
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c2 = CardTitle;
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_c3 = CardDescription;
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c4 = CardAction;
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c5 = CardContent;
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_c6 = CardFooter;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "CardHeader");
__turbopack_context__.k.register(_c2, "CardTitle");
__turbopack_context__.k.register(_c3, "CardDescription");
__turbopack_context__.k.register(_c4, "CardAction");
__turbopack_context__.k.register(_c5, "CardContent");
__turbopack_context__.k.register(_c6, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/admin/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// export default function HomePage() {
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     brand: "",
//     image: "",
//     description: ""
//   });
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "products"), product);
//       alert("Product added!");
//       setProduct({ name: "", price: "", brand: "", image: "", description: "" });
//     } catch (error) {
//       console.error("Error adding product:", error);
//     }
//   };
//   return (
//     <div className="sm:p-56 p-10">
//     <div className="bg-white p-8 max-w-xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Add New Product</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {["name", "price", "brand", "image", "description"].map((field) => (
//           <input
//             key={field}
//             name={field}
//             placeholder={field}
//             value={product[field as keyof typeof product]}
//             onChange={handleChange}
//             className="block w-full p-2 border rounded text-black"
//             required
//           />
//         ))}
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Upload Content
//         </button>
//       </form>
//     </div></div>
//   );
// }
// 'use client';
// import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// export default function AdminPage() {
//   const [product, setProduct] = useState({
//     title: "",
//     author: "",
//     description: "",
//     imageUrl: "",
//     pdfUrl: "",
//   });
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "books"), product);
//       alert("Book content added successfully!");
//       setProduct({
//         title: "",
//         author: "",
//         description: "",
//         imageUrl: "",
//         pdfUrl: "",
//       });
//     } catch (error) {
//       console.error("Error adding book:", error);
//     }
//   };
//   return (
//     <div className="sm:p-32 p-6">
//       <div className="bg-white p-8 max-w-xl mx-auto shadow-lg rounded-md">
//         <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {["title", "author", "description", "imageUrl", "pdfUrl"].map((field) => (
//             <input
//               key={field}
//               name={field}
//               placeholder={field}
//               value={product[field as keyof typeof product]}
//               onChange={handleChange}
//               className="block w-full p-2 border rounded text-black"
//               required
//             />
//           ))}
//           <button
//             type="submit"
//             className="bg-blue-600 text-white px-4 py-2 rounded"
//           >
//             Upload Book
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useState } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// export default function AddBookForm() {
//   const [book, setBook] = useState({
//     title: "",
//     author: "",
//     description: "",
//     imageUrl: "",
//     pdfUrl: "",
//   });
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "books"), book);
//       toast.success("Book added successfully!");
//       setBook({
//         title: "",
//         author: "",
//         description: "",
//         imageUrl: "",
//         pdfUrl: "",
//       });
//     } catch (error) {
//       toast.error("Failed to add book");
//       console.error("Firestore error:", error);
//     }
//   };
//   return (
//     <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
//       <Card className="shadow-md border">
//         <CardHeader>
//           <CardTitle className="text-xl">📚 Add New Book</CardTitle>
//           <CardDescription>
//             Fill in the book details to upload it to the Firebase database.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {[
//               { label: "Title", name: "title", type: "text" },
//               { label: "Author", name: "author", type: "text" },
//               { label: "Description", name: "description", type: "text" },
//               { label: "Image URL", name: "imageUrl", type: "url" },
//               { label: "PDF URL", name: "pdfUrl", type: "url" },
//             ].map(({ label, name, type }) => (
//               <div key={name} className="grid w-full gap-1.5">
//                 <Label htmlFor={name}>{label}</Label>
//                 <Input
//                   id={name}
//                   name={name}
//                   type={type}
//                   placeholder={`Enter ${label.toLowerCase()}`}
//                   value={book[name as keyof typeof book]}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
//             ))}
//             <Button type="submit" className="w-full">
//               Upload Book
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
// 
// 'use client';
// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import {
//   Card, CardHeader, CardTitle, CardDescription, CardContent,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// type Book = {
//   _id?: string;
//   title: string;
//   author: string;
//   description: string;
//   imageUrl: string;
//   pdfUrl: string;
// };
// export default function AdminDashboard() {
//   const [book, setBook] = useState<Book>({
//     title: "",
//     author: "",
//     description: "",
//     imageUrl: "",
//     pdfUrl: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [books, setBooks] = useState<Book[]>([]);
//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("/api/booklibrary");
//       const data = await res.json();
//       if (!res.ok) {
//         throw new Error(data.message || "Failed to fetch");
//       }
//       if (Array.isArray(data)) {
//         setBooks(data.reverse());
//       } else {
//         toast.error("❌ Unexpected data format received");
//         console.error("Unexpected data:", data);
//       }
//     } catch (err) {
//       toast.error("⚠️ Error fetching books");
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     fetchBooks();
//   }, []);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await fetch("/api/booklibrary", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(book),
//       });
//       if (res.ok) {
//         toast.success("📘 Book added successfully!");
//         setBook({
//           title: "",
//           author: "",
//           description: "",
//           imageUrl: "",
//           pdfUrl: "",
//         });
//         fetchBooks(); // refresh list
//       } else {
//         toast.error("Failed to add book");
//       }
//     } catch (err) {
//       toast.error("Something went wrong: " + (err as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="max-w-2xl mx-auto px-4 py-10 space-y-10">
//       {/* Form */}
//       <Card className="shadow-md border">
//         <CardHeader>
//           <CardTitle>📚 Add New Book</CardTitle>
//           <CardDescription>Add book to MongoDB</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <form onSubmit={handleSubmit} className="space-y-5">
//           {[
//   { label: "Title", name: "title", type: "text" },
//   { label: "Author", name: "author", type: "text" },
//   { label: "Description", name: "description", type: "text" },
//   { label: "PDF URL", name: "pdfUrl", type: "text" },        // ✅ changed
//   { label: "Image URL", name: "imageUrl", type: "text" },    // ✅ changed
// ].map(({ label, name, type }) => (
//   <div key={name} className="grid w-full gap-1.5">
//     <Label htmlFor={name}>{label}</Label>
//     <Input
//       id={name}
//       name={name}
//       type={type}
//       value={book[name as keyof Book]}
//       onChange={handleChange}
//       required
//     />
//   </div>
// ))}
//             <Button type="submit" disabled={loading} className="w-full">
//               {loading ? "Uploading..." : "Upload Book"}
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//       {/* Book List */}
//       <div className="space-y-5">
//         <h2 className="text-xl font-bold">📖 All Books</h2>
//         {books.map((b) => (
//           <Card key={b._id} className="p-4 border">
//             <p><strong>Title:</strong> {b.title}</p>
//             <p><strong>Author:</strong> {b.author}</p>
//             <p><strong>Description:</strong> {b.description}</p>
//             <a href={b.pdfUrl} className="text-blue-600 underline" target="_blank">📄 PDF</a>
//             {b.imageUrl && (
//               <img
//                 src={b.imageUrl}
//                 alt="Book Image"
//                 className="w-32 h-auto rounded-md shadow-md mt-2"
//               />
//             )}
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
// 'use client';
// import { useEffect, useState } from "react";
// import { toast } from "sonner";
// import {
//   Card, CardHeader, CardTitle, CardDescription, CardContent,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { BookOpen, Plus, Library, Trash2 } from "lucide-react";
// type Book = {
//   _id?: string;
//   title: string;
//   author: string;
//   description: string;
//   imageUrl: string;
//   pdfUrl: string;
//   promoImageUrl?: string;
//   isFeatured: boolean;
// };
// export default function AdminDashboard() {
//   const [book, setBook] = useState<any>({
//     type: "book",
//     title: "",
//     author: "",
//     description: "",
//     imageUrl: "",
//     pdfUrl: "",
//     promoImageUrl: "",
//     isFeatured: false,
//   });
//   const [loading, setLoading] = useState(false);
//   const [books, setBooks] = useState<Book[]>([]);
//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("/api/booklibrary");
//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || "Failed to fetch");
//       if (Array.isArray(data)) setBooks(data.reverse());
//       else toast.error("❌ Unexpected data format");
//     } catch (err) {
//       toast.error("⚠️ Error fetching books");
//       console.error(err);
//     }
//   };
//   useEffect(() => {
//     fetchBooks();
//   }, []);
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setBook({ ...book, [e.target.name]: e.target.value });
//   };
//   const handleDelete = async (id: string) => {
//     try {
//       await fetch(`/api/booklibrary?id=${id}`, {
//         method: "DELETE",
//       });
//       toast.success("Book deleted successfully");
//       fetchBooks();
//     } catch (error) {
//       toast.error("Something went wrong");
//     }
//   };
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     const isImageOnly = book.type === "image";
//     // Basic validation
//     if (isImageOnly && !book.promoImageUrl) {
//       toast.error("⚠️ Promo Image URL required for image type");
//       setLoading(false);
//       return;
//     }
//     if (!isImageOnly && (!book.title || !book.author || !book.imageUrl || !book.pdfUrl)) {
//       toast.error("⚠️ Please fill all required book fields");
//       setLoading(false);
//       return;
//     }
//     try {
//       const res = await fetch("http://localhost:3000/api/booklibrary", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(book),
//       });
//       if (res.ok) {
//         toast.success("✅ Added successfully!");
//         setBook({
//           type: "book",
//           title: "",
//           author: "",
//           description: "",
//           imageUrl: "",
//           pdfUrl: "",
//           promoImageUrl: "",
//           isFeatured: false,
//         });
//         fetchBooks();
//       } else {
//         toast.error("❌ Failed to add");
//       }
//     } catch (err) {
//       toast.error("❌ Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };
//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white border-r p-6 space-y-6 shadow-sm">
//         <h2 className="text-xl font-bold flex items-center gap-2">
//           <Library className="w-5 h-5" /> Admin Panel
//         </h2>
//         <nav className="space-y-3">
//           <button className="flex items-center gap-2 text-white font-medium hover:text-black">
//             <Plus className="w-4 h-4" /> Add Book
//           </button>
//           <button className="flex items-center gap-2 text-white font-medium hover:text-black">
//             <BookOpen className="w-4 h-4" /> View Books
//           </button>
//         </nav>
//       </aside>
//       {/* Main Content */}
//       <main className="flex-1 p-10 overflow-y-auto space-y-10">
//         <div>
//           <h1 className="text-3xl font-bold">📚 Manage Library</h1>
//           <p className="text-muted-foreground">Add and manage your digital books here.</p>
//         </div>
//         {/* Form Section */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Add New Book / Promo Image</CardTitle>
//             <CardDescription>Select type and enter related fields.</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {/* Type Selector */}
//               <div className="col-span-full">
//                 <Label htmlFor="type">Select Type</Label>
//                 <select
//                   name="type"
//                   id="type"
//                   className="border rounded p-2 w-full"
//                   value={book.type}
//                   onChange={handleChange}
//                 >
//                   <option value="book">📖 Book</option>
//                   <option value="image">🖼️ Promo Image</option>
//                 </select>
//               </div>
//               {/* Show only if type === 'book' */}
//               {book.type === "book" && (
//                 <>
//                   <InputField name="title" label="Title" value={book.title} onChange={handleChange} required />
//                   <InputField name="author" label="Author" value={book.author} onChange={handleChange} required />
//                   <InputField name="description" label="Description" value={book.description} onChange={handleChange} />
//                   <InputField name="imageUrl" label="Image URL" value={book.imageUrl} onChange={handleChange} required />
//                   <InputField name="pdfUrl" label="PDF URL" value={book.pdfUrl} onChange={handleChange} required />
//                 </>
//               )}
//               {/* Always show for both types */}
//               <InputField name="promoImageUrl" label="Promo Image URL" value={book.promoImageUrl} onChange={handleChange} required={book.type === "image"} />
//               <div className="col-span-full">
//                 <Label htmlFor="isFeatured">Show on Home Page?</Label>
//                 <div className="flex items-center gap-2">
//                   <input
//                     type="checkbox"
//                     id="isFeatured"
//                     name="isFeatured"
//                     checked={book.isFeatured}
//                     onChange={(e) => setBook({ ...book, isFeatured: e.target.checked })}
//                   />
//                   <span className="text-sm text-gray-700">Yes, display on homepage</span>
//                 </div>
//               </div>
//               <div className="col-span-full">
//                 <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-2xl shadow-xl">
//                   {loading ? "Uploading..." : "Submit"}
//                 </Button>
//               </div>
//             </form>
//           </CardContent>
//         </Card>
//         {/* Book List */}
//         <section className="space-y-4">
//           <h2 className="text-2xl font-bold">📖 All Entries</h2>
//           {books.length === 0 ? (
//             <p className="text-muted-foreground">No entries yet.</p>
//           ) : (
//             <div className="grid md:grid-cols-2 gap-4">
//               {books.map((b) => (
//                 <Card key={b._id} className="p-4">
//                   <div className="flex gap-4">
//                     {b.imageUrl && (
//                       <img
//                         src={b.imageUrl}
//                         alt={b.title}
//                         className="w-24 h-auto rounded-md border"
//                       />
//                     )}
//                     <div className="flex-1 space-y-1">
//                       <h3 className="font-semibold text-lg">{b.title}</h3>
//                       <p className="text-sm">👤 {b.author}</p>
//                       <p className="text-sm text-muted-foreground">{b.description}</p>
//                       {b.pdfUrl && (
//                         <a
//                           href={b.pdfUrl}
//                           target="_blank"
//                           className="text-blue-600 underline text-sm"
//                         >
//                           📄 View PDF
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                   <Button
//                     variant="destructive"
//                     onClick={() => b._id && handleDelete(b._id)}
//                   >
//                     Delete
//                   </Button>
//                 </Card>
//               ))}
//             </div>
//           )}
//         </section>
//       </main>
//     </div>
//   );
// }
// // 👇 Custom InputField component for reuse
// function InputField({ name, label, value, onChange, required = false }: {
//   name: string;
//   label: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
// }) {
//   return (
//     <div className="grid gap-1.5">
//       <Label htmlFor={name}>{label}</Label>
//       <Input
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         required={required}
//         placeholder={`Enter ${label.toLowerCase()}`}
//       />
//     </div>
//   );
// }
// "use client"
// import type React from "react"
// import { useEffect, useState } from "react"
// import { toast } from "sonner"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import {
//   BookOpen,
//   Plus,
//   Library,
//   Trash2,
//   Upload,
//   Eye,
//   Star,
//   ImageIcon,
//   FileText,
//   Users,
//   Search,
//   Edit,
//   X,
//   Save,
// } from "lucide-react"
// type Book = {
//   _id?: string
//   title: string
//   author: string
//   description: string
//   imageUrl: string
//   pdfUrl: string
//   promoImageUrl?: string
//   isFeatured: boolean
//   contentType: "book" | "image" // Updated to contentType
// }
// export default function Dashboard() {
//   const [book, setBook] = useState<any>({
//     contentType: "book", // Default contentType
//     title: "",
//     author: "",
//     description: "",
//     imageUrl: "",
//     pdfUrl: "",
//     promoImageUrl: "",
//     isFeatured: false,
//   })
//   const [loading, setLoading] = useState(false)
//   const [books, setBooks] = useState<Book[]>([])
//   const [activeTab, setActiveTab] = useState<"add" | "view">("add")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [editingBook, setEditingBook] = useState<Book | null>(null)
//   const [isEditMode, setIsEditMode] = useState(false)
//   const fetchBooks = async () => {
//     try {
//       const res = await fetch("/api/booklibrary")
//       const data = await res.json()
//       if (!res.ok) throw new Error(data.message || "Failed to fetch")
//       if (Array.isArray(data)) setBooks(data.reverse())
//       else toast.error("❌ Unexpected data format")
//     } catch (err) {
//       toast.error("⚠️ Error fetching books")
//       console.error(err)
//     }
//   }
//   useEffect(() => {
//     fetchBooks()
//   }, [])
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = e.target
//     const updateState = (prevState: any) => {
//       if (name === "contentType") {
//         const newType = value as "book" | "image"
//         const newState = { ...prevState, contentType: newType }
//         // Clear irrelevant fields based on new type
//         if (newType === "image") {
//           newState.title = ""
//           newState.author = ""
//           newState.description = ""
//           newState.imageUrl = ""
//           newState.pdfUrl = ""
//         } else {
//           // newType === "book"
//           newState.promoImageUrl = ""
//         }
//         return newState
//       } else {
//         return { ...prevState, [name]: value }
//       }
//     }
//     if (isEditMode && editingBook) {
//       setEditingBook(updateState(editingBook))
//     } else {
//       setBook(updateState(book))
//     }
//   }
//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, checked } = e.target
//     if (isEditMode && editingBook) {
//       setEditingBook({ ...editingBook, [name]: checked })
//     } else {
//       setBook({ ...book, [name]: checked })
//     }
//   }
//   const handleDelete = async (id: string) => {
//     if (!confirm("Are you sure you want to delete this entry?")) return
//     try {
//       await fetch(`/api/booklibrary?id=${id}`, {
//         method: "DELETE",
//       })
//       toast.success("✅ Entry deleted successfully")
//       fetchBooks()
//     } catch (error) {
//       toast.error("❌ Something went wrong")
//     }
//   }
//   const handleEdit = (bookToEdit: Book) => {
//     setEditingBook(bookToEdit)
//     setIsEditMode(true)
//     setActiveTab("add")
//     toast.info("📝 Edit mode activated")
//   }
//   const handleCancelEdit = () => {
//     setEditingBook(null)
//     setIsEditMode(false)
//     setBook({
//       contentType: "book",
//       title: "",
//       author: "",
//       description: "",
//       imageUrl: "",
//       pdfUrl: "",
//       promoImageUrl: "",
//       isFeatured: false,
//     })
//     setActiveTab("view") // Go back to view tab after cancelling edit
//     toast.info("❌ Edit cancelled")
//   }
//   const handleUpdate = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!editingBook || !editingBook._id) return
//     setLoading(true)
//     // Basic validation for edit mode
//     if (editingBook.contentType === "image" && !editingBook.promoImageUrl) {
//       toast.error("⚠️ Promo Image URL required for image type")
//       setLoading(false)
//       return
//     }
//     if (
//       editingBook.contentType === "book" &&
//       (!editingBook.title || !editingBook.author || !editingBook.imageUrl || !editingBook.pdfUrl)
//     ) {
//       toast.error("⚠️ Please fill all required book fields")
//       setLoading(false)
//       return
//     }
//     try {
//       const res = await fetch(`/api/booklibrary?id=${editingBook._id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(editingBook),
//       })
//       if (res.ok) {
//         toast.success("✅ Entry updated successfully!")
//         handleCancelEdit()
//         fetchBooks()
//         setActiveTab("view")
//       } else {
//         toast.error("❌ Failed to update entry")
//       }
//     } catch (err) {
//       toast.error("❌ Something went wrong")
//     } finally {
//       setLoading(false)
//     }
//   }
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (isEditMode) {
//       return handleUpdate(e)
//     }
//     setLoading(true)
//     const isImageOnly = book.contentType === "image"
//     // Basic validation for add mode
//     if (isImageOnly && !book.promoImageUrl) {
//       toast.error("⚠️ Promo Image URL required for image type")
//       setLoading(false)
//       return
//     }
//     if (!isImageOnly && (!book.title || !book.author || !book.imageUrl || !book.pdfUrl)) {
//       toast.error("⚠️ Please fill all required book fields")
//       setLoading(false)
//       return
//     }
//     try {
//       const res = await fetch("http://localhost:3000/api/booklibrary", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(book),
//       })
//       if (res.ok) {
//         toast.success("✅ Added successfully!")
//         setBook({
//           contentType: "book",
//           title: "",
//           author: "",
//           description: "",
//           imageUrl: "",
//           pdfUrl: "",
//           promoImageUrl: "",
//           isFeatured: false,
//         })
//         fetchBooks()
//         setActiveTab("view")
//       } else {
//         toast.error("❌ Failed to add")
//       }
//     } catch (err) {
//       toast.error("❌ Something went wrong")
//     } finally {
//       setLoading(false)
//     }
//   }
//   const filteredBooks = books.filter(
//     (book) =>
//       (book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         book.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         (book.contentType === "image" && book.promoImageUrl?.toLowerCase().includes(searchTerm.toLowerCase()))) ??
//       false,
//   )
//   const stats = {
//     total: books.length,
//     featured: books.filter((b) => b.isFeatured).length,
//     regular: books.filter((b) => !b.isFeatured).length,
//   }
//   const currentFormData = isEditMode ? editingBook : book
//   return (
//     <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-sans">
//       {/* Enhanced Sidebar */}
//       <aside className="w-72 bg-white shadow-xl border-r border-slate-200 flex flex-col">
//         <div className="p-6 border-b border-slate-200">
//           <div className="flex items-center gap-3 mb-6">
//             <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md">
//               <Library className="w-6 h-6 text-white" />
//             </div>
//             <div>
//               <h2 className="text-xl font-bold text-slate-800">Admin Panel</h2>
//               <p className="text-sm text-slate-500">Book Management</p>
//             </div>
//           </div>
//           {/* Edit Mode Indicator */}
//           {isEditMode && (
//             <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-lg text-white mb-4 shadow-md">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-orange-100 text-sm">Editing Mode</p>
//                   <p className="font-bold truncate text-lg">
//                     {editingBook?.contentType === "book" ? editingBook?.title : "Promo Image"}
//                   </p>
//                 </div>
//                 <Edit className="w-6 h-6 text-orange-200" />
//               </div>
//             </div>
//           )}
//           {/* Stats Cards */}
//           <div className="grid grid-cols-1 gap-3 mb-6">
//             <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-lg text-white shadow-md">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-blue-100 text-sm">Total Entries</p>
//                   <p className="text-2xl font-bold">{stats.total}</p>
//                 </div>
//                 <BookOpen className="w-8 h-8 text-blue-200 opacity-70" />
//               </div>
//             </div>
//             <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-4 rounded-lg text-white shadow-md">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-purple-100 text-sm">Featured</p>
//                   <p className="text-2xl font-bold">{stats.featured}</p>
//                 </div>
//                 <Star className="w-8 h-8 text-purple-200 opacity-70" />
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Navigation */}
//         <nav className="p-6 space-y-2 flex-1">
//           <button
//             onClick={() => setActiveTab("add")}
//             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
//               activeTab === "add"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
//                 : "text-slate-600 hover:bg-slate-100"
//             }`}
//           >
//             {isEditMode ? <Edit className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
//             <span className="font-medium">{isEditMode ? "Edit Entry" : "Add New Entry"}</span>
//           </button>
//           <button
//             onClick={() => setActiveTab("view")}
//             className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
//               activeTab === "view"
//                 ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
//                 : "text-slate-600 hover:bg-slate-100"
//             }`}
//           >
//             <Eye className="w-5 h-5" />
//             <span className="font-medium">View All Entries</span>
//           </button>
//           {isEditMode && (
//             <button
//               onClick={handleCancelEdit}
//               className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all duration-200"
//             >
//               <X className="w-5 h-5" />
//               <span className="font-medium">Cancel Edit</span>
//             </button>
//           )}
//         </nav>
//         <div className="p-6 border-t border-slate-200 text-sm text-slate-500">
//           <p>&copy; {new Date().getFullYear()} Book Library. All rights reserved.</p>
//         </div>
//       </aside>
//       {/* Main Content */}
//       <main className="flex-1 overflow-y-auto">
//         {/* Header */}
//         <header className="bg-white shadow-sm border-b border-slate-200 p-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-bold text-slate-800">
//                 {activeTab === "add" ? (isEditMode ? "✏️ Edit Entry" : "📚 Add New Content") : "📖 Library Management"}
//               </h1>
//               <p className="text-slate-600 mt-1">
//                 {activeTab === "add"
//                   ? isEditMode
//                     ? `Editing: ${editingBook?.contentType === "book" ? editingBook?.title : "Promo Image"}`
//                     : "Add books and promotional images to your library"
//                   : "Manage your digital book collection"}
//               </p>
//             </div>
//             {activeTab === "view" && (
//               <div className="flex items-center gap-4">
//                 <div className="relative">
//                   <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
//                   <Input
//                     placeholder="Search entries..."
//                     value={searchTerm}
//                     onChange={(e) => setSearchTerm(e.target.value)}
//                     className="pl-10 w-64 border-slate-300 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </header>
//         <div className="p-6">
//           {activeTab === "add" ? (
//             /* Add/Edit Form Section */
//             <Card className="shadow-xl border-0 bg-white rounded-xl">
//               <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b rounded-t-xl p-6">
//                 <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-800">
//                   {isEditMode ? <Edit className="w-6 h-6" /> : <Upload className="w-6 h-6" />}
//                   {isEditMode ? "Edit Entry Details" : "Add New Book / Promo Image"}
//                 </CardTitle>
//                 <CardDescription className="text-slate-600">
//                   {isEditMode
//                     ? "Update the entry information below"
//                     : "Choose the content type and fill in the required information"}
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="p-8">
//                 <form onSubmit={handleSubmit} className="space-y-8">
//                   {/* Type Selector - Only show in add mode */}
//                   {!isEditMode && (
//                     <div className="space-y-2">
//                       <Label htmlFor="contentType" className="text-base font-semibold text-slate-700">
//                         Content Type
//                       </Label>
//                       <select
//                         name="contentType"
//                         id="contentType"
//                         className="w-full border border-slate-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-slate-700"
//                         value={book.contentType}
//                         onChange={handleChange}
//                       >
//                         <option value="book">📖 Complete Book</option>
//                         <option value="image">🖼️ Promotional Image Only</option>
//                       </select>
//                     </div>
//                   )}
//                   {/* Book Fields */}
//                   {(isEditMode && currentFormData?.contentType === "book") ||
//                   (!isEditMode && book.contentType === "book") ? (
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <EnhancedInputField
//                         name="title"
//                         label="Book Title"
//                         value={currentFormData?.title || ""}
//                         onChange={handleChange}
//                         required
//                         icon={<BookOpen className="w-4 h-4 text-slate-500" />}
//                       />
//                       <EnhancedInputField
//                         name="author"
//                         label="Author Name"
//                         value={currentFormData?.author || ""}
//                         onChange={handleChange}
//                         required
//                         icon={<Users className="w-4 h-4 text-slate-500" />}
//                       />
//                       <div className="md:col-span-2">
//                         <EnhancedInputField
//                           name="description"
//                           label="Description"
//                           value={currentFormData?.description || ""}
//                           onChange={handleChange}
//                           icon={<FileText className="w-4 h-4 text-slate-500" />}
//                         />
//                       </div>
//                       <EnhancedInputField
//                         name="imageUrl"
//                         label="Cover Image URL"
//                         value={currentFormData?.imageUrl || ""}
//                         onChange={handleChange}
//                         required
//                         icon={<ImageIcon className="w-4 h-4 text-slate-500" />}
//                       />
//                       <EnhancedInputField
//                         name="pdfUrl"
//                         label="PDF File URL"
//                         value={currentFormData?.pdfUrl || ""}
//                         onChange={handleChange}
//                         required
//                         icon={<FileText className="w-4 h-4 text-slate-500" />}
//                       />
//                     </div>
//                   ) : null}
//                   {/* Promo Image Field */}
//                   {(isEditMode && currentFormData?.contentType === "image") ||
//                   (!isEditMode && book.contentType === "image") ? (
//                     <div className="space-y-2">
//                       <EnhancedInputField
//                         name="promoImageUrl"
//                         label="Promotional Image URL"
//                         value={currentFormData?.promoImageUrl || ""}
//                         onChange={handleChange}
//                         required
//                         icon={<ImageIcon className="w-4 h-4 text-slate-500" />}
//                       />
//                     </div>
//                   ) : null}
//                   {/* Featured Toggle */}
//                   <div className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-200 shadow-sm">
//                     <input
//                       type="checkbox"
//                       id="isFeatured"
//                       name="isFeatured"
//                       checked={currentFormData?.isFeatured || false}
//                       onChange={handleCheckboxChange}
//                       className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-0 cursor-pointer"
//                     />
//                     <div>
//                       <Label htmlFor="isFeatured" className="font-medium text-slate-700 cursor-pointer">
//                         Display on Homepage
//                       </Label>
//                       <p className="text-sm text-slate-600">This content will be featured on the main page</p>
//                     </div>
//                   </div>
//                   {/* Submit Button */}
//                   <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                     <Button
//                       type="submit"
//                       disabled={loading}
//                       className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
//                     >
//                       {loading ? (
//                         <div className="flex items-center gap-2">
//                           <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                           {isEditMode ? "Updating..." : "Processing..."}
//                         </div>
//                       ) : (
//                         <div className="flex items-center gap-2">
//                           {isEditMode ? <Save className="w-5 h-5" /> : <Upload className="w-5 h-5" />}
//                           {isEditMode ? "Update Entry" : "Add to Library"}
//                         </div>
//                       )}
//                     </Button>
//                     {isEditMode && (
//                       <Button
//                         type="button"
//                         variant="outline"
//                         onClick={handleCancelEdit}
//                         className="flex-1 px-8 py-3 text-lg rounded-xl border-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 font-semibold"
//                       >
//                         <X className="w-5 h-5 mr-2" />
//                         Cancel
//                       </Button>
//                     )}
//                   </div>
//                 </form>
//               </CardContent>
//             </Card>
//           ) : (
//             /* Books List Section */
//             <div className="space-y-6">
//               {filteredBooks.length === 0 ? (
//                 <Card className="p-12 text-center bg-white shadow-lg rounded-xl">
//                   <BookOpen className="w-16 h-16 text-slate-300 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-slate-600 mb-2">No Entries Found</h3>
//                   <p className="text-slate-500">
//                     {searchTerm
//                       ? "No entries match your search criteria."
//                       : "Start by adding your first entry to the library."}
//                   </p>
//                   {!searchTerm && (
//                     <Button
//                       onClick={() => setActiveTab("add")}
//                       className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl shadow-md"
//                     >
//                       <Plus className="w-4 h-4 mr-2" />
//                       Add First Entry
//                     </Button>
//                   )}
//                 </Card>
//               ) : (
//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredBooks.map((b) => (
//                     <Card
//                       key={b._id}
//                       className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 bg-white border-0 rounded-xl"
//                     >
//                       <div className="relative">
//                         {/* Conditional Image Display */}
//                         {b.contentType === "image" && b.promoImageUrl ? (
//                           <div className="aspect-[3/4] overflow-hidden bg-slate-100">
//                             <img
//                               src={b.promoImageUrl || "/placeholder.svg"} // Use promoImageUrl for contentType 'image'
//                               alt="Promotional Image"
//                               className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
//                             />
//                           </div>
//                         ) : b.contentType === "book" && b.imageUrl ? (
//                           <div className="aspect-[3/4] overflow-hidden bg-slate-100">
//                             <img
//                               src={b.imageUrl || "/placeholder.svg"} // Use imageUrl for contentType 'book'
//                               alt={b.title}
//                               className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
//                             />
//                           </div>
//                         ) : (
//                           // Fallback for no image or invalid contentType
//                           <div className="aspect-[3/4] flex items-center justify-center bg-slate-100 text-slate-400">
//                             <ImageIcon className="w-12 h-12" />
//                           </div>
//                         )}
//                         {/* Type Badge */}
//                         {b.contentType === "image" && (
//                           <Badge className="absolute top-3 left-3 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
//                             <ImageIcon className="w-3 h-3 mr-1" />
//                             Promo
//                           </Badge>
//                         )}
//                         {b.isFeatured && (
//                           <Badge className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm px-3 py-1 rounded-full shadow-md">
//                             <Star className="w-3 h-3 mr-1" />
//                             Featured
//                           </Badge>
//                         )}
//                       </div>
//                       <div className="p-6 space-y-3">
//                         {/* Conditional Title/Author/Description */}
//                         {b.contentType === "book" ? (
//                           <>
//                             <div>
//                               <h3 className="font-bold text-xl text-slate-800 line-clamp-2">{b.title}</h3>
//                               <p className="text-slate-600 flex items-center gap-1 text-sm mt-1">
//                                 <Users className="w-4 h-4 text-slate-500" />
//                                 {b.author}
//                               </p>
//                             </div>
//                             {b.description && <p className="text-sm text-slate-500 line-clamp-3">{b.description}</p>}
//                           </>
//                         ) : (
//                           <div>
//                             <h3 className="font-bold text-xl text-slate-800 line-clamp-2">Promotional Image</h3>
//                             <p className="text-slate-600 flex items-center gap-1 text-sm mt-1">
//                               <ImageIcon className="w-4 h-4 text-slate-500" />
//                               {b.promoImageUrl ? new URL(b.promoImageUrl).pathname.split("/").pop() : "No URL"}
//                             </p>
//                           </div>
//                         )}
//                         <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
//                           {/* Conditional PDF Button */}
//                           {b.contentType === "book" && b.pdfUrl && (
//                             <Button
//                               variant="outline"
//                               size="sm"
//                               asChild
//                               className="flex-1 bg-transparent border-slate-300 text-slate-700 hover:bg-slate-100"
//                             >
//                               <a href={b.pdfUrl} target="_blank" rel="noopener noreferrer">
//                                 <FileText className="w-4 h-4 mr-1" />
//                                 PDF
//                               </a>
//                             </Button>
//                           )}
//                           <Button
//                             variant="outline"
//                             size="sm"
//                             onClick={() => handleEdit(b)}
//                             className="bg-blue-50 hover:bg-blue-100 text-blue-600 border-blue-200"
//                           >
//                             <Edit className="w-4 h-4" />
//                           </Button>
//                           <Button
//                             variant="destructive"
//                             size="sm"
//                             onClick={() => b._id && handleDelete(b._id)}
//                             className="bg-red-500 hover:bg-red-600"
//                           >
//                             <Trash2 className="w-4 h-4" />
//                           </Button>
//                         </div>
//                       </div>
//                     </Card>
//                   ))}
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   )
// }
// // Enhanced Input Field Component
// function EnhancedInputField({
//   name,
//   label,
//   value,
//   onChange,
//   required = false,
//   icon,
// }: {
//   name: string
//   label: string
//   value: string
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
//   required?: boolean
//   icon?: React.ReactNode
// }) {
//   return (
//     <div className="space-y-2">
//       <Label htmlFor={name} className="text-base font-semibold text-slate-700 flex items-center gap-2">
//         {icon}
//         {label}
//         {required && <span className="text-red-500">*</span>}
//       </Label>
//       <Input
//         id={name}
//         name={name}
//         value={value}
//         onChange={onChange}
//         required={required}
//         placeholder={`Enter ${label.toLowerCase()}`}
//         className="border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all p-3 text-slate-800"
//       />
//     </div>
//   )
// }
// "use client";
// import { useState, useCallback, useEffect } from "react";
// import { toast } from "sonner";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Trash2, Edit, ImageIcon, BookOpen } from "lucide-react";
// // Interface for Books
// interface Book {
//   _id: string;
//   title: string;
//   author: string;
//   description: string;
//   imageUrl: string;
//   pdfUrl: string;
//   contentType: "book";
// }
// // Interface for Promos
// interface Promo {
//   _id: string;
//   title: string;
//   promoImageUrl: string;
//   isFeatured: boolean;
//   contentType: "image";
// }
// export default function AdminDashboard() {
//   // State for Books
//   const [books, setBooks] = useState<Book[]>([]);
//   const [bookForm, setBookForm] = useState({
//     title: "",
//     author: "",
//     description: "",
//     imageUrl: "",
//     pdfUrl: "",
//   });
//   const [editingBookId, setEditingBookId] = useState<string | null>(null);
//   // State for Promos
//   const [promos, setPromos] = useState<Promo[]>([]);
//   const [promoForm, setPromoForm] = useState({
//     title: "",
//     promoImageUrl: "",
//     isFeatured: false,
//   });
//   const [editingPromoId, setEditingPromoId] = useState<string | null>(null);
//   const [promoImageFile, setPromoImageFile] = useState<File | null>(null);
//   // Fetch Books
//   const fetchBooks = useCallback(async () => {
//     try {
//       const res = await fetch("/api/booklibrary?");
//       if (!res.ok) throw new Error("Failed to fetch books");
//       const data = await res.json();
//       setBooks(data.filter((item: Book) => item.contentType === "book"));
//     } catch (err) {
//       toast.error("⚠️ Error fetching books");
//       console.error(err);
//     }
//   }, []);
//   // Fetch Promos
//   const fetchPromos = useCallback(async () => {
//     try {
//       const res = await fetch("/api/booklibrary?purpose=promo");
//       if (!res.ok) throw new Error("Failed to fetch promos");
//       const data = await res.json();
//       setPromos(data.filter((item: Promo) => item.contentType === "image"));
//     } catch (err) {
//       toast.error("⚠️ Error fetching promos");
//       console.error(err);
//     }
//   }, []);
//   useEffect(() => {
//   fetchBooks();
//   fetchPromos();
// }, [fetchBooks, fetchPromos]); // ✅
//   // Handle Book Form Submission
//   const handleBookSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!bookForm.title || !bookForm.author || !bookForm.imageUrl || !bookForm.pdfUrl) {
//       toast.error("⚠️ Please fill all required book fields");
//       return;
//     }
//     try {
//       const method = editingBookId ? "PUT" : "POST";
//       const url = editingBookId
//         ? `/api/booklibrary?_id=${editingBookId}`
//         : "/api/booklibrary";
//       const res = await fetch(url, {
//         method,
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ ...bookForm, contentType: "book" }),
//       });
//       if (!res.ok) throw new Error("Failed to save book");
//       toast.success(editingBookId ? "✅ Book updated" : "✅ Book added");
//       setBookForm({ title: "", author: "", description: "", imageUrl: "", pdfUrl: "" });
//       setEditingBookId(null);
//       fetchBooks();
//     } catch (err) {
//       toast.error("⚠️ Error saving book");
//       console.error(err);
//     }
//   };
//   // Handle Promo Form Submission
//   const handlePromoSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!promoForm.title || (!promoForm.promoImageUrl && !promoImageFile)) {
//       toast.error("⚠️ Please provide a title and either an image file or URL");
//       return;
//     }
//   }
//   // Handle Book Deletion
//   const handleDeleteBook = async (id: string) => {
//     try {
//       const res = await fetch(`/api/booklibrary?_id=${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Failed to delete book");
//       toast.success("✅ Book deleted");
//       fetchBooks();
//     } catch (err) {
//       toast.error("⚠️ Error deleting book");
//       console.error(err);
//     }
//   };
//   // Handle Promo Deletion
//   const handleDeletePromo = async (id: string) => {
//     try {
//       const res = await fetch(`/api/booklibrary?_id=${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Failed to delete promo");
//       toast.success("✅ Promo deleted");
//       fetchPromos();
//     } catch (err) {
//       toast.error("⚠️ Error deleting promo");
//       console.error(err);
//     }
//   };
//   // Handle Book Edit
//   const handleEditBook = (book: Book) => {
//     setBookForm({
//       title: book.title,
//       author: book.author,
//       description: book.description,
//       imageUrl: book.imageUrl,
//       pdfUrl: book.pdfUrl,
//     });
//     setEditingBookId(book._id);
//   };
//   // Handle Promo Edit
//   const handleEditPromo = (promo: Promo) => {
//     setPromoForm({
//       title: promo.title,
//       promoImageUrl: promo.promoImageUrl,
//       isFeatured: promo.isFeatured,
//     });
//     setEditingPromoId(promo._id);
//     setPromoImageFile(null);
//   };
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
//       <header className="mb-8">
//         <h1 className="text-4xl font-bold text-slate-800">Admin Dashboard</h1>
//         <p className="text-slate-600 mt-2">Manage books and promotional images for Noor-e-Kitab</p>
//       </header>
//       <Tabs defaultValue="books" className="w-full">
//         <TabsList className="grid w-full grid-cols-2 bg-white rounded-xl p-1">
//           <TabsTrigger value="books" className="rounded-lg py-2">
//             <BookOpen className="w-4 h-4 mr-2" />
//             Books
//           </TabsTrigger>
//           <TabsTrigger value="promos" className="rounded-lg py-2">
//             <ImageIcon className="w-4 h-4 mr-2" />
//             Promos
//           </TabsTrigger>
//         </TabsList>
//         {/* Books Tab */}
//         <TabsContent value="books">
//           <Card className="bg-white shadow-lg rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-2xl font-semibold text-slate-700">
//                 {editingBookId ? "Edit Book" : "Add New Book"}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleBookSubmit} className="space-y-4">
//                 <div>
//                   <Label htmlFor="bookTitle">Book Title</Label>
//                   <Input
//                     id="bookTitle"
//                     value={bookForm.title}
//                     onChange={(e) => setBookForm({ ...bookForm, title: e.target.value })}
//                     placeholder="Enter book title"
//                     className="rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="bookAuthor">Author</Label>
//                   <Input
//                     id="bookAuthor"
//                     value={bookForm.author}
//                     onChange={(e) => setBookForm({ ...bookForm, author: e.target.value })}
//                     placeholder="Enter author name"
//                     className="rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="bookDescription">Description</Label>
//                   <Input
//                     id="bookDescription"
//                     value={bookForm.description}
//                     onChange={(e) => setBookForm({ ...bookForm, description: e.target.value })}
//                     placeholder="Enter book description"
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="bookImageUrl">Book Cover URL</Label>
//                   <Input
//                     id="bookImageUrl"
//                     value={bookForm.imageUrl}
//                     onChange={(e) => setBookForm({ ...bookForm, imageUrl: e.target.value })}
//                     placeholder="Enter book cover URL"
//                     className="rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="bookPdfUrl">PDF URL</Label>
//                   <Input
//                     id="bookPdfUrl"
//                     value={bookForm.pdfUrl}
//                     onChange={(e) => setBookForm({ ...bookForm, pdfUrl: e.target.value })}
//                     placeholder="Enter PDF URL"
//                     className="rounded-lg"
//                     required
//                   />
//                 </div>
//                 <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
//                   {editingBookId ? "Update Book" : "Add Book"}
//                 </Button>
//                 {editingBookId && (
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => {
//                       setBookForm({ title: "", author: "", description: "", imageUrl: "", pdfUrl: "" });
//                       setEditingBookId(null);
//                     }}
//                     className="ml-2 rounded-lg"
//                   >
//                     Cancel
//                   </Button>
//                 )}
//               </form>
//             </CardContent>
//           </Card>
//           <Card className="mt-6 bg-white shadow-lg rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-2xl font-semibold text-slate-700">All Books</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {books.length === 0 ? (
//                 <p className="text-slate-500">No books available</p>
//               ) : (
//                 <ul className="space-y-4">
//                   {books.map((book) => (
//                     <li key={book._id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
//                       <div>
//                         <h3 className="font-bold text-slate-800">{book.title}</h3>
//                         <p className="text-sm text-slate-600">Author: {book.author}</p>
//                         <p className="text-sm text-slate-600">Cover: {book.imageUrl}</p>
//                       </div>
//                       <div className="flex gap-2">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => handleEditBook(book)}
//                           className="rounded-lg"
//                         >
//                           <Edit className="w-4 h-4 mr-1" />
//                           Edit
//                         </Button>
//                         <Button
//                           variant="destructive"
//                           size="sm"
//                           onClick={() => handleDeleteBook(book._id)}
//                           className="rounded-lg"
//                         >
//                           <Trash2 className="w-4 h-4 mr-1" />
//                           Delete
//                         </Button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </CardContent>
//           </Card>
//         </TabsContent>
//         {/* Promos Tab */}
//         <TabsContent value="promos">
//           <Card className="bg-white shadow-lg rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-2xl font-semibold text-slate-700">
//                 {editingPromoId ? "Edit Promotional Image" : "Add New Promotional Image"}
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handlePromoSubmit} className="space-y-4">
//                 <div>
//                   <Label htmlFor="promoTitle">Promo Title</Label>
//                   <Input
//                     id="promoTitle"
//                     value={promoForm.title}
//                     onChange={(e) => setPromoForm({ ...promoForm, title: e.target.value })}
//                     placeholder="Enter promo title"
//                     className="rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="promoImageFile">Upload Image</Label>
//                   <Input
//                     id="promoImageFile"
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => setPromoImageFile(e.target.files?.[0] || null)}
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <div>
//                   <Label htmlFor="promoImageUrl">Or Enter Image URL</Label>
//                   <Input
//                     id="promoImageUrl"
//                     value={promoForm.promoImageUrl}
//                     onChange={(e) => setPromoForm({ ...promoForm, promoImageUrl: e.target.value })}
//                     placeholder="Enter promo image URL"
//                     className="rounded-lg"
//                   />
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <Checkbox
//                     id="isFeatured"
//                     checked={promoForm.isFeatured}
//                     onCheckedChange={(checked) => setPromoForm({ ...promoForm, isFeatured: !!checked })}
//                   />
//                   <Label htmlFor="isFeatured">Display on Homepage</Label>
//                 </div>
//                 <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
//                   {editingPromoId ? "Update Promo" : "Add Promo"}
//                 </Button>
//                 {editingPromoId && (
//                   <Button
//                     type="button"
//                     variant="outline"
//                     onClick={() => {
//                       setPromoForm({ title: "", promoImageUrl: "", isFeatured: false });
//                       setPromoImageFile(null);
//                       setEditingPromoId(null);
//                     }}
//                     className="ml-2 rounded-lg"
//                   >
//                     Cancel
//                   </Button>
//                 )}
//               </form>
//             </CardContent>
//           </Card>
//           <Card className="mt-6 bg-white shadow-lg rounded-xl">
//             <CardHeader>
//               <CardTitle className="text-2xl font-semibold text-slate-700">All Promotional Images</CardTitle>
//             </CardHeader>
//             <CardContent>
//               {promos.length === 0 ? (
//                 <p className="text-slate-500">No promotional images available</p>
//               ) : (
//                 <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                   {promos.map((promo) => (
//                     <li key={promo._id} className="p-4 bg-slate-50 rounded-lg">
//                       <div className="relative aspect-[3/4] mb-2">
//                         <img
//                           src={promo.promoImageUrl}
//                           alt={promo.title}
//                           className="w-full h-full object-cover rounded-lg"
//                           onError={() => toast.error(`⚠️ Failed to load image for ${promo.title}`)}
//                         />
//                         {promo.isFeatured && (
//                           <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs px-2 py-1 rounded-full">
//                             Featured
//                           </span>
//                         )}
//                       </div>
//                       <h3 className="font-bold text-slate-800">{promo.title}</h3>
//                       <p className="text-sm text-slate-600 truncate">{promo.promoImageUrl}</p>
//                       <div className="flex gap-2 mt-2">
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => handleEditPromo(promo)}
//                           className="rounded-lg"
//                         >
//                           <Edit className="w-4 h-4 mr-1" />
//                           Edit
//                         </Button>
//                         <Button
//                           variant="destructive"
//                           size="sm"
//                           onClick={() => handleDeletePromo(promo._id)}
//                           className="rounded-lg"
//                         >
//                           <Trash2 className="w-4 h-4 mr-1" />
//                           Delete
//                         </Button>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </CardContent>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
//   }
__turbopack_context__.s({
    "default": (()=>AdminDashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function AdminDashboard() {
    _s();
    const [newBookFormData, setNewBookFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        contentType: "book",
        title: "",
        author: "",
        description: "",
        imageUrl: "",
        pdfUrl: "",
        isFeatured: false
    });
    const [newPromoFormData, setNewPromoFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        contentType: "image",
        promoImageUrl: "",
        isActive: false,
        title: "Promotional Image"
    });
    const [imageFile, setImageFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pdfFile, setPdfFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [promoFile, setPromoFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [currentNewContentType, setCurrentNewContentType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("book");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Handle dropdown change
    const handleContentTypeChange = (e)=>{
        const newType = e.target.value;
        console.log(`🔄 Dropdown clicked, value: ${newType}`);
        setCurrentNewContentType(newType);
        // Reset forms and files
        setNewBookFormData({
            contentType: "book",
            title: "",
            author: "",
            description: "",
            imageUrl: "",
            pdfUrl: "",
            isFeatured: false
        });
        setNewPromoFormData({
            contentType: "image",
            promoImageUrl: "",
            isActive: false,
            title: "Promotional Image"
        });
        setImageFile(null);
        setPdfFile(null);
        setPromoFile(null);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(`Switched to ${newType === "book" ? "Book" : "Promotional Image"} form`);
        console.log("🔄 Form and files reset");
    };
    // Handle book form input changes
    const handleNewBookChange = (e)=>{
        const { name, value } = e.target;
        setNewBookFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        console.log(`📝 Book form updated - ${name}: ${value}`);
    };
    // Handle promo form input changes
    const handleNewPromoChange = (e)=>{
        const { name, value } = e.target;
        setNewPromoFormData((prev)=>({
                ...prev,
                [name]: value
            }));
        console.log(`📝 Promo form updated - ${name}: ${value}`);
    };
    // Handle file input changes
    const handleFileChange = (e, fileType)=>{
        const file = e.target.files?.[0] || null;
        if (fileType === "image") {
            setImageFile(file);
            console.log(`📷 Book image selected: ${file?.name || "none"}`);
        } else if (fileType === "pdf") {
            setPdfFile(file);
            console.log(`📄 Book PDF selected: ${file?.name || "none"}`);
        } else {
            setPromoFile(file);
            console.log(`🖼️ Promo image selected: ${file?.name || "none"}`);
        }
    };
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(`🖱️ Add Content button clicked for ${currentNewContentType}`);
        setLoading(true);
        try {
            if (currentNewContentType === "book") {
                console.log("📤 Submitting book form with data:", newBookFormData);
                if (!newBookFormData.title || !newBookFormData.author || !newBookFormData.description) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("⚠️ All book fields (title, author, description) are required");
                    console.log("❌ Missing book fields:", newBookFormData);
                    setLoading(false);
                    return;
                }
                if (!imageFile || !pdfFile) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("⚠️ Both image and PDF files are required for books");
                    console.log("❌ Missing book files:", {
                        imageFile: !!imageFile,
                        pdfFile: !!pdfFile
                    });
                    setLoading(false);
                    return;
                }
                // Upload files
                const formData = new FormData();
                formData.append("image", imageFile);
                formData.append("pdf", pdfFile);
                console.log("📤 Uploading book files to /api/book");
                const uploadRes = await fetch("/api/book", {
                    method: "POST",
                    body: formData
                });
                if (!uploadRes.ok) {
                    const errorData = await uploadRes.json();
                    throw new Error(errorData.message || "Failed to upload files");
                }
                const uploadData = await uploadRes.json();
                console.log("✅ Book files uploaded:", uploadData);
                // Submit book data
                const bookData = {
                    ...newBookFormData,
                    imageUrl: uploadData.imageUrl,
                    pdfUrl: uploadData.pdfUrl
                };
                console.log("📤 Submitting book data to /api/booklibrary/:", bookData);
                const bookRes = await fetch("/api/booklibrary", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(bookData)
                });
                if (!bookRes.ok) throw new Error("Failed to save book");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("✅ Book added successfully");
                console.log("✅ Book added successfully");
            } else {
                console.log("📤 Submitting promo form with data:", newPromoFormData);
                if (!promoFile) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("⚠️ Promo image file is required");
                    console.log("❌ Missing promo file");
                    setLoading(false);
                    return;
                }
                // Submit promo data
                const formData = new FormData();
                formData.append("file", promoFile);
                formData.append("title", newPromoFormData.title || "Promotional Image");
                formData.append("isActive", newPromoFormData.isActive.toString());
                console.log("📤 Submitting promo data to /api/promo");
                const promoRes = await fetch("/api/upload-promo", {
                    method: "POST",
                    body: formData
                });
                if (!promoRes.ok) {
                    const errorData = await promoRes.json();
                    throw new Error(errorData.message || "Failed to save promo image");
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("✅ Promo image added successfully");
                console.log("✅ Promo image added successfully");
            }
            // Reset form after successful submission
            setNewBookFormData({
                contentType: "book",
                title: "",
                author: "",
                description: "",
                imageUrl: "",
                pdfUrl: "",
                isFeatured: false
            });
            setNewPromoFormData({
                contentType: "image",
                promoImageUrl: "",
                isActive: false,
                title: "Promotional Image"
            });
            setImageFile(null);
            setPdfFile(null);
            setPromoFile(null);
            console.log("🔄 Form and files reset after submission");
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("❌ Failed to add content");
            console.error("❌ Submission error:", error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-100 p-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "max-w-4xl mx-auto shadow-lg border-0 bg-white rounded-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "bg-blue-50 border-b rounded-t-xl p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-3 text-2xl font-bold text-gray-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                    className: "w-6 h-6 text-blue-500"
                                }, void 0, false, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 2060,
                                    columnNumber: 13
                                }, this),
                                "Add New Content"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 2059,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            className: "text-gray-600",
                            children: "Fill in the required information to add a book or promotional image"
                        }, void 0, false, {
                            fileName: "[project]/app/admin/page.tsx",
                            lineNumber: 2063,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 2058,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "contentType",
                                        className: "text-base font-semibold text-gray-700",
                                        children: "Content Type"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2070,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "contentType",
                                        id: "contentType",
                                        className: "w-full border border-gray-300 rounded-lg p-3 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700",
                                        value: currentNewContentType,
                                        onChange: (e)=>{
                                            console.log("🔄 Dropdown clicked, value:", e.target.value);
                                            handleContentTypeChange(e);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "book",
                                                children: "📖 Book"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2083,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "image",
                                                children: "🖼️ Promotional Image"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2084,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2073,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 2069,
                                columnNumber: 13
                            }, this),
                            currentNewContentType === "book" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "title",
                                                className: "text-gray-700",
                                                children: "Book Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2091,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                name: "title",
                                                value: newBookFormData.title,
                                                onChange: handleNewBookChange,
                                                required: true,
                                                placeholder: "Enter book title",
                                                className: "border-gray-300 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2092,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2090,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "author",
                                                className: "text-gray-700",
                                                children: "Author Name"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                name: "author",
                                                value: newBookFormData.author,
                                                onChange: handleNewBookChange,
                                                required: true,
                                                placeholder: "Enter author name",
                                                className: "border-gray-300 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2103,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2101,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:col-span-2 space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "description",
                                                className: "text-gray-700",
                                                children: "Description"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2113,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                name: "description",
                                                value: newBookFormData.description,
                                                onChange: handleNewBookChange,
                                                required: true,
                                                placeholder: "Enter book description",
                                                className: "border-gray-300 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2114,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "imageFile",
                                                className: "text-gray-700",
                                                children: "Cover Image"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "file",
                                                name: "imageFile",
                                                onChange: (e)=>handleFileChange(e, "image"),
                                                accept: "image/jpeg,image/png,image/jpg",
                                                required: true,
                                                className: "border-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2125,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2123,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "pdfFile",
                                                className: "text-gray-700",
                                                children: "PDF File"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "file",
                                                name: "pdfFile",
                                                onChange: (e)=>handleFileChange(e, "pdf"),
                                                accept: "application/pdf",
                                                required: true,
                                                className: "border-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2134,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                id: "isFeatured",
                                                checked: newBookFormData.isFeatured,
                                                onChange: (e)=>{
                                                    setNewBookFormData((prev)=>({
                                                            ...prev,
                                                            isFeatured: e.target.checked
                                                        }));
                                                    console.log(`📝 Book isFeatured: ${e.target.checked}`);
                                                },
                                                className: "h-4 w-4 text-blue-600 border-gray-300 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "isFeatured",
                                                className: "text-gray-700",
                                                children: "Display on Homepage"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2145,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 2089,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "title",
                                                className: "text-gray-700",
                                                children: "Promo Title"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2162,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                name: "title",
                                                value: newPromoFormData.title,
                                                onChange: handleNewPromoChange,
                                                placeholder: "Enter promo title",
                                                className: "border-gray-300 focus:ring-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2163,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2161,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "promoFile",
                                                className: "text-gray-700",
                                                children: "Promotional Image"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2172,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                type: "file",
                                                name: "promoFile",
                                                onChange: (e)=>handleFileChange(e, "promo"),
                                                accept: "image/jpeg,image/png,image/jpg",
                                                required: true,
                                                className: "border-gray-300"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2173,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                id: "isActive",
                                                checked: newPromoFormData.isActive,
                                                onChange: (e)=>{
                                                    setNewPromoFormData((prev)=>({
                                                            ...prev,
                                                            isActive: e.target.checked
                                                        }));
                                                    console.log(`📝 Promo isActive: ${e.target.checked}`);
                                                },
                                                className: "h-4 w-4 text-blue-600 border-gray-300 rounded"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2183,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "isActive",
                                                className: "text-gray-700",
                                                children: "Display on Homepage"
                                            }, void 0, false, {
                                                fileName: "[project]/app/admin/page.tsx",
                                                lineNumber: 2193,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 2182,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 2160,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                disabled: loading,
                                className: "w-full bg-blue-500 hover:bg-blue-600 text-white py-3 text-lg rounded-xl",
                                onClick: ()=>console.log("🖱️ Add Content button clicked in UI"),
                                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "animate-spin h-5 w-5 text-white",
                                            viewBox: "0 0 24 24",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    className: "opacity-25",
                                                    cx: "12",
                                                    cy: "12",
                                                    r: "10",
                                                    stroke: "currentColor",
                                                    strokeWidth: "4"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 2207,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    className: "opacity-75",
                                                    fill: "currentColor",
                                                    d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/admin/page.tsx",
                                                    lineNumber: 2208,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/admin/page.tsx",
                                            lineNumber: 2206,
                                            columnNumber: 19
                                        }, this),
                                        "Processing..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/admin/page.tsx",
                                    lineNumber: 2205,
                                    columnNumber: 17
                                }, this) : "Add Content"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 2198,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 2068,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/admin/page.tsx",
                    lineNumber: 2067,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/admin/page.tsx",
            lineNumber: 2057,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 2056,
        columnNumber: 5
    }, this);
}
_s(AdminDashboard, "LNZeIiOQEUNWz6K9DoS386yob8Y=");
_c = AdminDashboard;
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_5236f9d6._.js.map