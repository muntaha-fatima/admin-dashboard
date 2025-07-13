// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Upload, FileText, ImageIcon, AlertCircle } from "lucide-react"
// import { addContent } from "./../lib/firebase-opertion"
// import { toast } from "sonner"
// // import { Alert, AlertDescription } from "@/components/ui/alert"

// // File validation function with increased limits
// const validateFile = (file: File, type: "image" | "pdf"): { valid: boolean; error?: string } => {
//   const maxSize = type === "image" ? 10 * 1024 * 1024 : 50 * 1024 * 1024 // 10MB for images, 50MB for PDFs

//   if (file.size > maxSize) {
//     const maxSizeMB = type === "image" ? "10MB" : "50MB"
//     return {
//       valid: false,
//       error: `File size must be less than ${maxSizeMB}. Current size: ${(file.size / (1024 * 1024)).toFixed(1)}MB`,
//     }
//   }

//   if (type === "image" && !file.type.startsWith("image/")) {
//     return {
//       valid: false,
//       error: "Please select a valid image file",
//     }
//   }

//   if (type === "pdf" && file.type !== "application/pdf") {
//     return {
//       valid: false,
//       error: "Please select a valid PDF file",
//     }
//   }

//   return { valid: true }
// }

// export function AddContentForm({ onSuccess }: { onSuccess: () => void }) {
//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     description: "",
//   })
//   const [imageFile, setImageFile] = useState<File | null>(null)
//   const [pdfFile, setPdfFile] = useState<File | null>(null)
//   const [loading, setLoading] = useState(false)
//   const [uploadProgress, setUploadProgress] = useState("")

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()

//     console.log("🚀 Form submitted, starting validation...")

//     // Validate required fields
//     if (!formData.title.trim()) {
//       console.log("❌ Title is empty")
//       toast.error("Please enter a title")
//       return
//     }

//     if (!formData.author.trim()) {
//       console.log("❌ Author is empty")
//       toast.error("Please enter an author")
//       return
//     }

//     if (!formData.description.trim()) {
//       console.log("❌ Description is empty")
//       toast.error("Please enter a description")
//       return
//     }

//     console.log("✅ Required fields validation passed")

//     // Validate files
//     if (imageFile) {
//       console.log("🖼️ Validating image file...")
//       const imageValidation = validateFile(imageFile, "image")
//       if (!imageValidation.valid) {
//         console.log("❌ Image validation failed:", imageValidation.error)
//         toast.error(imageValidation.error!)
//         return
//       }
//       console.log("✅ Image validation passed")
//     }

//     if (pdfFile) {
//       console.log("📄 Validating PDF file...")
//       const pdfValidation = validateFile(pdfFile, "pdf")
//       if (!pdfValidation.valid) {
//         console.log("❌ PDF validation failed:", pdfValidation.error)
//         toast.error(pdfValidation.error!)
//         return
//       }
//       console.log("✅ PDF validation passed")
//     }

//     console.log("🎯 All validations passed, starting submission...")

//     setLoading(true)
//     setUploadProgress("Starting upload...")

//     try {
//       console.log("📝 Submitting content with data:", {
//         title: formData.title,
//         author: formData.author,
//         description: formData.description.substring(0, 50) + "...",
//         hasImage: !!imageFile,
//         hasPdf: !!pdfFile,
//       })

//       if (imageFile) {
//         console.log("🖼️ Image file details:", {
//           name: imageFile.name,
//           size: `${(imageFile.size / (1024 * 1024)).toFixed(1)}MB`,
//           type: imageFile.type,
//         })
//         setUploadProgress("Uploading image...")
//       }

//       if (pdfFile) {
//         console.log("📄 PDF file details:", {
//           name: pdfFile.name,
//           size: `${(pdfFile.size / (1024 * 1024)).toFixed(1)}MB`,
//           type: pdfFile.type,
//         })
//         setUploadProgress("Uploading PDF...")
//       }

//       if (!imageFile && !pdfFile) {
//         setUploadProgress("Saving content...")
//       }

//       console.log("🔥 Calling addContent function...")
//       const result = await addContent(formData, imageFile || undefined, pdfFile || undefined)
//       console.log("✅ Content added successfully with ID:", result)

//       toast.success("Content added successfully!")

//       // Reset form
//       console.log("🔄 Resetting form...")
//       setFormData({ title: "", author: "", description: "" })
//       setImageFile(null)
//       setPdfFile(null)

//       // Reset file inputs
//       const imageInput = document.getElementById("image") as HTMLInputElement
//       const pdfInput = document.getElementById("pdf") as HTMLInputElement
//       if (imageInput) imageInput.value = ""
//       if (pdfInput) pdfInput.value = ""

//       setUploadProgress("")
//       console.log("🎉 Form reset complete, calling onSuccess...")
//       onSuccess()
//     } catch (error) {
//       console.error("💥 Submission error:", error)
//       const errorMessage = error instanceof Error ? error.message : "Failed to add content"
//       toast.error(errorMessage)
//       setUploadProgress("")
//     } finally {
//       console.log("🏁 Submission process complete, setting loading to false")
//       setLoading(false)
//     }
//   }

//   const formatFileSize = (bytes: number): string => {
//     return (bytes / (1024 * 1024)).toFixed(1) + "MB"
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Add New Content</CardTitle>
//         <CardDescription>Fill in the details to add new content</CardDescription>
//       </CardHeader>
//       <CardContent>
//         {/* {loading && uploadProgress && (
//           <Alert className="mb-4">
//             <AlertCircle className="h-4 w-4" />
//             <AlertDescription>{uploadProgress}</AlertDescription>
//           </Alert>
//         )} */}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="title">Title *</Label>
//             <Input
//               id="title"
//               value={formData.title}
//               onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
//               placeholder="Enter title"
//               required
//               disabled={loading}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="author">Author *</Label>
//             <Input
//               id="author"
//               value={formData.author}
//               onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
//               placeholder="Enter author name"
//               required
//               disabled={loading}
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="description">Description *</Label>
//             <Textarea
//               id="description"
//               value={formData.description}
//               onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
//               placeholder="Enter description"
//               rows={4}
//               required
//               disabled={loading}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="image">Image (Max 10MB)</Label>
//               <div className="flex items-center gap-2">
//                 <Input
//                   id="image"
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => {
//                     const file = e.target.files?.[0] || null
//                     setImageFile(file)
//                     if (file) {
//                       console.log("🖼️ Image file selected:", file.name, formatFileSize(file.size))
//                     }
//                   }}
//                   className="hidden"
//                   disabled={loading}
//                 />
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => document.getElementById("image")?.click()}
//                   className="w-full"
//                   disabled={loading}
//                 >
//                   <ImageIcon className="w-4 h-4 mr-2" />
//                   {imageFile ? `${imageFile.name} (${formatFileSize(imageFile.size)})` : "Choose Image"}
//                 </Button>
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="pdf">PDF (Max 50MB)</Label>
//               <div className="flex items-center gap-2">
//                 <Input
//                   id="pdf"
//                   type="file"
//                   accept=".pdf"
//                   onChange={(e) => {
//                     const file = e.target.files?.[0] || null
//                     setPdfFile(file)
//                     if (file) {
//                       console.log("📄 PDF file selected:", file.name, formatFileSize(file.size))
//                     }
//                   }}
//                   className="hidden"
//                   disabled={loading}
//                 />
//                 <Button
//                   type="button"
//                   variant="outline"
//                   onClick={() => document.getElementById("pdf")?.click()}
//                   className="w-full"
//                   disabled={loading}
//                 >
//                   <FileText className="w-4 h-4 mr-2" />
//                   {pdfFile ? `${pdfFile.name} (${formatFileSize(pdfFile.size)})` : "Choose PDF"}
//                 </Button>
//               </div>
//             </div>
//           </div>

//           <Button type="submit" disabled={loading} className="w-full">
//             <Upload className="w-4 h-4 mr-2" />
//             {loading ? `Processing... ${uploadProgress}` : "Add Content"}
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   )
// }
