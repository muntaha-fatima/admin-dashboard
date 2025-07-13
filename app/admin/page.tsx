// // app/admin/page.tsx
// 'use client'

// import { useState } from 'react'
// import { db, storage } from '@/lib/firebase'
// import { addDoc, collection } from 'firebase/firestore'
// import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Textarea } from '@/components/ui/textarea'
// import { Label } from '@/components/ui/label'

// export default function AdminPage() {
//   const [title, setTitle] = useState('')
//   const [titleEn, setTitleEn] = useState('')
//   const [author, setAuthor] = useState('')
//   const [description, setDescription] = useState('')
//   const [category, setCategory] = useState('Fiqh')
//   const [pdfFile, setPdfFile] = useState<File | null>(null)
//   const [imageFile, setImageFile] = useState<File | null>(null)
//   const [uploading, setUploading] = useState(false)

//   const handleSubmit = async (e: any) => {
//     e.preventDefault()
//     if (!pdfFile || !title || !titleEn || !author || !description) return alert('Please fill all fields')

//     setUploading(true)

//     // Upload PDF
//     const pdfRef = ref(storage, `pdfs/${pdfFile.name}`)
//     await uploadBytes(pdfRef, pdfFile)
//     const pdfURL = await getDownloadURL(pdfRef)

//     // Upload Image (optional)
//     let imageURL = ''
//     if (imageFile) {
//       const imgRef = ref(storage, `images/${imageFile.name}`)
//       await uploadBytes(imgRef, imageFile)
//       imageURL = await getDownloadURL(imgRef)
//     }

//     // Save to Firestore
//     await addDoc(collection(db, 'books'), {
//       title,
//       titleEn,
//       author,
//       description,
//       category,
//       pdf: pdfURL,
//       imageUrl: imageURL,
//       createdAt: new Date()
//     })

//     alert('Book added successfully ✅')
//     setUploading(false)
//     setTitle('')
//     setTitleEn('')
//     setAuthor('')
//     setDescription('')
//     setPdfFile(null)
//     setImageFile(null)
//   }

//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-6">
//       <h1 className="text-3xl font-bold">📚 Add Book (Admin Panel)</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <Label>Title (Urdu)</Label>
//           <Input value={title} onChange={(e) => setTitle(e.target.value)} />
//         </div>
//         <div>
//           <Label>Title (English)</Label>
//           <Input value={titleEn} onChange={(e) => setTitleEn(e.target.value)} />
//         </div>
//         <div>
//           <Label>Author</Label>
//           <Input value={author} onChange={(e) => setAuthor(e.target.value)} />
//         </div>
//         <div>
//           <Label>Description</Label>
//           <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </div>
//         <div>
//           <Label>Category</Label>
//           <select className="w-full p-2 rounded" value={category} onChange={(e) => setCategory(e.target.value)}>
//             <option value="Fiqh">Fiqh</option>
//             <option value="Hadith">Hadith</option>
//             <option value="Logic">Logic</option>
//             <option value="Usool al-Fiqh">Usool al-Fiqh</option>
//           </select>
//         </div>
//         <div>
//           <Label>PDF File</Label>
//           <Input type="file" accept=".pdf" onChange={(e) => setPdfFile(e.target.files?.[0] || null)} />
//         </div>
//         <div>
//           <Label>Cover Image (Optional)</Label>
//           <Input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files?.[0] || null)} />
//         </div>
//         <Button type="submit" disabled={uploading}>
//           {uploading ? 'Uploading...' : 'Submit Book'}
//         </Button>
//       </form>
//     </div>
//   )
// }


// "use client"

// import { useState } from "react"
// import { AddContentForm } from "@/components/add-content-form"
// import ContentList from "@/components/content-list"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Database, Plus, List, AlertTriangle, Copy, ExternalLink } from "lucide-react"
// // import { Alert, AlertDescription } from "@/components/ui/alert"
// import { Button } from "@/components/ui/button"
// import { isFirebaseConfigured } from "@/lib/firebase"

// export default function AdminDashboard() {
//   const [refreshKey, setRefreshKey] = useState(0)

//   const handleContentAdded = () => {
//     setRefreshKey((prev) => prev + 1)
//   }

//   const copyEnvTemplate = () => {
//     const envTemplate = `NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCelhhtmqdQsTiUUCYrLWP0kj0yN
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=islamic-books-7b70a.firebaseapp.com
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=islamic-books-7b70a
// NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=islamic-books-7b70a.appspot.com
// NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1091480978052
// NEXT_PUBLIC_FIREBASE_APP_ID=1:1091480978052:web:946524cb5fa8efecc9b8d1`

//     navigator.clipboard.writeText(envTemplate)
//     alert("Environment variables template copied to clipboard!")
//   }

//   return (
//     <div className="container mx-auto p-6 space-y-6">
//       <div className="flex items-center gap-3 mb-6">
//         <Database className="w-8 h-8 text-primary" />
//         <div>
//           <h1 className="text-3xl font-bold">Firebase Admin Dashboard</h1>
//           <p className="text-muted-foreground">Manage your content with Firebase</p>
//         </div>
//       </div>

//       {!isFirebaseConfigured && (
//         // <Alert className="border-orange-200 bg-orange-50">
//         //   <AlertTriangle className="h-4 w-4 text-orange-600" />
//         //   <AlertDescription className="text-orange-800">
//             <div className="space-y-3">
//               <p className="font-semibold">Firebase Configuration Required</p>
//               <p>To use this dashboard, you need to configure Firebase. Follow these steps:</p>

//               <div className="space-y-2">
//                 <p className="font-medium">1. Get your Firebase config:</p>
//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => window.open("https://console.firebase.google.com", "_blank")}
//                   className="text-xs"
//                 >
//                   <ExternalLink className="w-3 h-3 mr-1" />
//                   Open Firebase Console
//                 </Button>
//               </div>

//               <div className="space-y-2">
//                 <p className="font-medium">2. Create .env.local file in your project root:</p>
//                 <Button variant="outline" size="sm" onClick={copyEnvTemplate} className="text-xs bg-transparent">
//                   <Copy className="w-3 h-3 mr-1" />
//                   Copy Template
//                 </Button>
//               </div>

//               <p className="font-medium">3. Restart your development server</p>
//             </div>
//         //   </AlertDescription>
//         // </Alert>
//       )}

//       <Tabs defaultValue="add" className="space-y-6">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="add" className="flex items-center gap-2">
//             <Plus className="w-4 h-4" />
//             Add Content
//           </TabsTrigger>
//           <TabsTrigger value="list" className="flex items-center gap-2">
//             <List className="w-4 h-4" />
//             View Content
//           </TabsTrigger>
//         </TabsList>

//         <TabsContent value="add">
//           {isFirebaseConfigured ? (
//             <AddContentForm onSuccess={handleContentAdded} />
//           ) : (
//             <Card>
//               <CardContent className="text-center py-8">
//                 <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//                 <p className="text-muted-foreground">Please configure Firebase to add content</p>
//               </CardContent>
//             </Card>
//           )}
//         </TabsContent>

//         <TabsContent value="list">
//           {isFirebaseConfigured ? (
//             <ContentList refresh={refreshKey} />
//           ) : (
//             <Card>
//               <CardContent className="text-center py-8">
//                 <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-4" />
//                 <p className="text-muted-foreground">Please configure Firebase to view content</p>
//               </CardContent>
//             </Card>
//           )}
//         </TabsContent>
//       </Tabs>

//       <Card className="mt-8">
//         <CardHeader>
//           <CardTitle>🔥 Firebase Setup Guide</CardTitle>
//           <CardDescription>Complete setup instructions</CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="space-y-4">
//             <div>
//               <h4 className="font-semibold mb-2 flex items-center gap-2">
//                 <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">1</span>
//                 Create Firebase Project
//               </h4>
//               <ul className="text-sm text-muted-foreground space-y-1 ml-6">
//                 <li>• Go to Firebase Console</li>
//                 <li>• Create new project or select existing</li>
//                 <li>• Enable Firestore Database</li>
//                 <li>• Enable Storage</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-2 flex items-center gap-2">
//                 <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">2</span>
//                 Get Web App Config
//               </h4>
//               <ul className="text-sm text-muted-foreground space-y-1 ml-6">
//                 <li>• Project Settings → General</li>
//                 <li>• Scroll to "Your apps" section</li>
//                 <li>• Add web app or select existing</li>
//                 <li>• Copy the config values</li>
//               </ul>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-2 flex items-center gap-2">
//                 <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">3</span>
//                 Create .env.local File
//               </h4>
//               <div className="bg-muted p-3 rounded-md text-sm font-mono">
//                 <div>NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key</div>
//                 <div>NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com</div>
//                 <div>NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id</div>
//                 <div>NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com</div>
//                 <div>NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id</div>
//                 <div>NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id</div>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-2 flex items-center gap-2">
//                 <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">4</span>
//                 Configure Firebase Rules
//               </h4>
//               <div className="space-y-3">
//                 <div>
//                   <p className="text-sm font-medium">Firestore Rules:</p>
//                   <div className="bg-muted p-3 rounded-md text-sm font-mono">
//                     <div>rules_version = '2';</div>
//                     <div>service cloud.firestore {`{`}</div>
//                     <div>
//                       &nbsp;&nbsp;match /databases/{`{database}`}/documents {`{`}
//                     </div>
//                     <div>
//                       &nbsp;&nbsp;&nbsp;&nbsp;match /{`{document=**}`} {`{`}
//                     </div>
//                     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow read, write: if true;</div>
//                     <div>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div>
//                     <div>&nbsp;&nbsp;{`}`}</div>
//                     <div>{`}`}</div>
//                   </div>
//                 </div>

//                 <div>
//                   <p className="text-sm font-medium">Storage Rules:</p>
//                   <div className="bg-muted p-3 rounded-md text-sm font-mono">
//                     <div>rules_version = '2';</div>
//                     <div>service firebase.storage {`{`}</div>
//                     <div>
//                       &nbsp;&nbsp;match /b/{`{bucket}`}/o {`{`}
//                     </div>
//                     <div>
//                       &nbsp;&nbsp;&nbsp;&nbsp;match /{`{allPaths=**}`} {`{`}
//                     </div>
//                     <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;allow read, write: if true;</div>
//                     <div>&nbsp;&nbsp;&nbsp;&nbsp;{`}`}</div>
//                     <div>&nbsp;&nbsp;{`}`}</div>
//                     <div>{`}`}</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-semibold mb-2 flex items-center gap-2">
//                 <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">5</span>
//                 Restart Development Server
//               </h4>
//               <div className="bg-muted p-3 rounded-md text-sm font-mono">npm run dev</div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }




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



'use client';

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Plus, Library } from "lucide-react";

type Book = {
  _id?: string;
  title: string;
  author: string;
  description: string;
  imageUrl: string;         // Main book cover image
  pdfUrl: string;           // PDF Link
  promoImageUrl?: string;   // 👈 NEW: Promo/Banner Image (for homepage)
  isFeatured: boolean;
};


export default function AdminDashboard() {
const [book, setBook] = useState<Book>({
  title: "",
  author: "",
  description: "",
  imageUrl: "",
  pdfUrl: "",
  promoImageUrl:"",
  isFeatured: false, // ✅ Add this line
});


  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    try {
      const res = await fetch("/api/booklibrary");
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to fetch");
      if (Array.isArray(data)) setBooks(data.reverse());
      else toast.error("❌ Unexpected data format");
    } catch (err) {
      toast.error("⚠️ Error fetching books");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setBook({ ...book, [e.target.name]: e.target.value });
};

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/booklibrary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });

      if (res.ok) {
        toast.success("📘 Book added!");
        setBook({ title: "", author: "", description: "", imageUrl: "", pdfUrl: "" , isFeatured:false});
        fetchBooks();
      } else toast.error("Failed to add book");
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64  bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 hover:bg-slate-50 text-white -scroll-mt-96 border-r p-6 space-y-6 shadow-sm">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Library className="w-5 h-5" /> Admin Panel
        </h2>
        <nav className="space-y-3">
          <button className="flex items-center gap-2 text-white font-medium hover:text-black">
            <Plus className="w-4 h-4" /> Add Book
          </button>
          <button className="flex items-center gap-2 text-white font-medium hover:text-black">
            <BookOpen className="w-4 h-4" /> View Books
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto space-y-10">
        <div>
          <h1 className="text-3xl font-bold">📚 Manage Library</h1>
          <p className="text-muted-foreground">Add and manage your digital books here.</p>
        </div>

        {/* Form Section */}
        <Card>
          <CardHeader>
            <CardTitle>Add New Book</CardTitle>
            <CardDescription>Enter book details to add it to your library</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
  { label: "Title", name: "title" },
  { label: "Author", name: "author" },
  { label: "Description", name: "description" },
  { label: "Image URL", name: "imageUrl" },
  { label: "PDF URL", name: "pdfUrl" },
  { label: "Promo Image URL", name: "promoImageUrl" }, // 👈 NEW
].map(({ label, name }) => (
  <div key={name} className="grid gap-1.5">
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      name={name}
      onChange={handleChange}
      required={name !== "promoImageUrl"} // promo image optional
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
))}

              <div className="col-span-full">
  <Label htmlFor="isFeatured">Show on Home Page?</Label>
  <div className="flex items-center gap-2">
    <input
      type="checkbox"
      id="isFeatured"
      name="isFeatured"
      checked={book.isFeatured}
      onChange={(e) => setBook({ ...book, isFeatured: e.target.checked })}
    />
    <span className="text-sm text-gray-700">Yes, display on homepage</span>
  </div>
</div>

              <div className="col-span-full">
                <Button type="submit" disabled={loading} className="w-full  bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl ">
                  {loading ? "Uploading..." : "Upload Book"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Book List */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">📖 All Books</h2>
          {books.length === 0 ? (
            <p className="text-muted-foreground">No books added yet.</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-4">
              {books.map((b) => (
                <Card key={b._id} className="p-4">
                  <div className="flex gap-4">
                    {b.imageUrl && (
                      <img
                        src={b.imageUrl}
                        alt={b.title}
                        className="w-24 h-auto rounded-md border"
                      />
                    )}
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold text-lg">{b.title}</h3>
                      <p className="text-sm">👤 {b.author}</p>
                      <p className="text-sm text-muted-foreground">{b.description}</p>
                      {b.pdfUrl && (
                        <a
                          href={b.pdfUrl}
                          target="_blank"
                          className="text-blue-600 underline text-sm"
                        >
                          📄 View PDF
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
