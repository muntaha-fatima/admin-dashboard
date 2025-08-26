(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as TriangleAlert>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const bannerImages = [
    {
        videoUrl: "/banner-video1.mp4",
        imageUrl: "/images/images (2).jfif",
        alt: "Islamic books showcase",
        title: "Unveil Sacred Knowledge",
        titleAr: "اكشف عن المعرفة المقدسة",
        subtitle: "Curated Islamic books to inspire your journey",
        subtitleAr: "كتب إسلامية مختارة لإلهام رحلتك",
        category: "All"
    },
    {
        videoUrl: "/banner-video2.mp4",
        imageUrl: "/images/images (1).jfif",
        alt: "Hadith and Tafseer collection",
        title: "Illuminate Your Path",
        titleAr: "أنر طريقك",
        subtitle: "Dive into Hadith and Tafseer",
        subtitleAr: "انغمس في الحديث والتفسير",
        category: "Hadith"
    },
    {
        videoUrl: "/banner-video3.mp4",
        imageUrl: "/images/images (3).jfif",
        alt: "Fiqh and Aqeedah books",
        title: "Strengthen Your Faith",
        titleAr: "قوّي إيمانك",
        subtitle: "Explore Fiqh and Aqeedah",
        subtitleAr: "استكشف الفقه والعقيدة",
        category: "Fiqh"
    }
];
function HomePage() {
    _s();
    const [promoImages, setPromoImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const fetchPromo = {
                "HomePage.useEffect.fetchPromo": async ()=>{
                    try {
                        // Ensure the correct API endpoint is used for promo images
                        console.log("📡 Fetching promo images from https://frontend-rho-jet-76.vercel.app/api/booklibrary?purpose=promo");
                        const response = await fetch("https://frontend-rho-jet-76.vercel.app/api/booklibrary?purpose=promo");
                        if (!response.ok) {
                            const errorData = await response.json();
                            throw new Error(errorData.message || "Failed to fetch promo images");
                        }
                        const data = await response.json();
                        console.log("✅ Raw promo data fetched from API:", data);
                        // Assuming backend now correctly filters, no need for client-side filter here
                        const cleaned = Array.isArray(data) ? data.map({
                            "HomePage.useEffect.fetchPromo": (item)=>({
                                    ...item,
                                    promoImageUrl: item.promoImageUrl?.trim().replace(/^"|"$/g, "")
                                })
                        }["HomePage.useEffect.fetchPromo"]) : [];
                        setPromoImages(cleaned);
                        console.log("✅ Cleaned promo images for display:", cleaned);
                    } catch (error) {
                        console.error("Promo fetch error:", error);
                        setError(error.message || "Failed to load promos");
                    } finally{
                        setLoading(false);
                    }
                }
            }["HomePage.useEffect.fetchPromo"];
            fetchPromo();
        }
    }["HomePage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            const interval = setInterval({
                "HomePage.useEffect.interval": ()=>{
                    setCurrent({
                        "HomePage.useEffect.interval": (prev)=>(prev + 1) % bannerImages.length
                    }["HomePage.useEffect.interval"]);
                }
            }["HomePage.useEffect.interval"], 4000);
            return ({
                "HomePage.useEffect": ()=>clearInterval(interval)
            })["HomePage.useEffect"];
        }
    }["HomePage.useEffect"], []);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-[40vh] text-gray-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "h-10 w-10 animate-spin text-teal-600"
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 1938,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 font-medium",
                children: "Loading promos..."
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 1939,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 1937,
        columnNumber: 7
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center min-h-[40vh] text-red-600",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TriangleAlert$3e$__["TriangleAlert"], {
                className: "h-10 w-10"
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 1946,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-lg",
                children: "Something went wrong"
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 1947,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-400",
                children: error
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 1948,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 1945,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full h-[75vh] overflow-hidden mt-8 rounded-3xl shadow-2xl border border-gray-200",
                children: bannerImages.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: img.imageUrl,
                                alt: img.alt,
                                className: "w-full h-full object-cover object-center brightness-90 contrast-110"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 1963,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 1968,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-white text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight animate-fade-in-up drop-shadow-2xl",
                                        children: "Timeless Islamic Wisdom"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 1970,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl sm:text-4xl md:text-5xl font-bold mt-3 drop-shadow-md animate-fade-in-up",
                                        dir: "rtl",
                                        children: "الحكمة الإسلامية الخالدة"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 1973,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-lg sm:text-xl max-w-2xl font-medium animate-fade-in-up text-white/90",
                                        children: "Curated books to inspire faith and knowledge"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 1979,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg sm:text-xl mt-2 max-w-2xl font-medium animate-fade-in-up text-white/80",
                                        dir: "rtl",
                                        children: "كتب مختارة لإلهام الإيمان والمعرفة"
                                    }, void 0, false, {
                                        fileName: "[project]/app/admin/page.tsx",
                                        lineNumber: 1982,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 1969,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 1956,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 1954,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "container mx-auto px-4 py-12 w-full max-w-7xl",
                children: [
                    !loading && !error && promoImages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center min-h-[40vh] text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-medium",
                                children: "No promo images available"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 1992,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Check back later!"
                            }, void 0, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 1993,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 1991,
                        columnNumber: 11
                    }, this),
                    !loading && !error && promoImages.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6",
                        children: promoImages.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.promoImageUrl,
                                alt: item.title || `Promo ${item._id}`,
                                className: "w-full h-auto rounded shadow"
                            }, item._id, false, {
                                fileName: "[project]/app/admin/page.tsx",
                                lineNumber: 2001,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/admin/page.tsx",
                        lineNumber: 1997,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/admin/page.tsx",
                lineNumber: 1989,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/admin/page.tsx",
        lineNumber: 1953,
        columnNumber: 5
    }, this);
}
_s(HomePage, "EtTUnsvNWEqXBeRPqEICxKy7N8Q=");
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": (()=>hasA11yProp),
    "mergeClasses": (()=>mergeClasses),
    "toCamelCase": (()=>toCamelCase),
    "toKebabCase": (()=>toKebabCase),
    "toPascalCase": (()=>toPascalCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-client] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>LoaderCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("loader-circle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Loader2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.509.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>TriangleAlert)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
];
const TriangleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("triangle-alert", __iconNode);
;
 //# sourceMappingURL=triangle-alert.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as TriangleAlert>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TriangleAlert": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_bf7edf5c._.js.map