// import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from "firebase/firestore"
// import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage"
// import { db, storage } from "./firebase"

// export interface ContentItem {
//   id?: string
//   title: string
//   author: string
//   description: string
//   imageUrl?: string
//   pdfUrl?: string
//   createdAt: Date
// }

// // Upload file to Firebase Storage with proper error handling
// export const uploadFile = async (file: File, folder: string): Promise<string> => {
//   try {
//     // Validate file first
//     if (!file) {
//       throw new Error("No file provided")
//     }

//     // Create a clean filename
//     const timestamp = Date.now()
//     const cleanFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
//     const fileName = `${timestamp}_${cleanFileName}`
//     const fullPath = `${folder}/${fileName}`

//     console.log(`Starting upload: ${file.name} (${file.size} bytes) to ${fullPath}`)

//     // Create storage reference
//     const storageRef = ref(storage, fullPath)

//     // Create metadata
//     const metadata = {
//       contentType: file.type,
//       customMetadata: {
//         originalName: file.name,
//         uploadedAt: new Date().toISOString(),
//       },
//     }

//     console.log("Storage reference created, starting upload...")

//     // Upload file
//     const snapshot = await uploadBytes(storageRef, file, metadata)
//     console.log("File uploaded successfully:", snapshot.metadata.name)

//     // Get download URL
//     const downloadURL = await getDownloadURL(snapshot.ref)
//     console.log("Download URL obtained:", downloadURL)

//     return downloadURL
//   } catch (error: any) {
//     console.error("Detailed upload error:", {
//       error: error,
//       message: error?.message,
//       code: error?.code,
//       fileName: file?.name,
//       fileSize: file?.size,
//       fileType: file?.type,
//     })

//     // Handle specific Firebase Storage errors
//     if (error?.code) {
//       switch (error.code) {
//         case "storage/unauthorized":
//           throw new Error("Storage access denied. Please check Firebase Storage rules.")
//         case "storage/canceled":
//           throw new Error("Upload was canceled.")
//         case "storage/quota-exceeded":
//           throw new Error("Storage quota exceeded.")
//         case "storage/invalid-format":
//           throw new Error("Invalid file format.")
//         case "storage/invalid-argument":
//           throw new Error("Invalid upload argument.")
//         default:
//           throw new Error(`Storage error (${error.code}): ${error.message}`)
//       }
//     }

//     // Handle network errors
//     if (error?.message?.includes("ERR_FAILED") || error?.message?.includes("CORS")) {
//       throw new Error("Network error. Please check your internet connection and Firebase configuration.")
//     }

//     throw new Error(`Upload failed: ${error?.message || "Unknown error"}`)
//   }
// }

// // Add content with comprehensive error handling
// export const addContent = async (content: Omit<ContentItem, "id" | "createdAt">, imageFile?: File, pdfFile?: File) => {
//   try {
//     let imageUrl = ""
//     let pdfUrl = ""

//     // Validate Firebase configuration
//     if (!storage) {
//       throw new Error("Firebase Storage is not initialized properly")
//     }

//     // Upload image if provided
//     if (imageFile) {
//       console.log("Uploading image:", imageFile.name)
//       imageUrl = await uploadFile(imageFile, "images")
//       console.log("Image upload completed")
//     }

//     // Upload PDF if provided
//     if (pdfFile) {
//       console.log("Uploading PDF:", pdfFile.name)
//       pdfUrl = await uploadFile(pdfFile, "pdfs")
//       console.log("PDF upload completed")
//     }

//     // Add to Firestore
//     console.log("Saving content to Firestore...")
//     const docRef = await addDoc(collection(db, "content"), {
//       ...content,
//       imageUrl,
//       pdfUrl,
//       createdAt: new Date(),
//     })

//     console.log("Content saved successfully with ID:", docRef.id)
//     return docRef.id
//   } catch (error) {
//     console.error("Error in addContent:", error)
//     throw error
//   }
// }

// // Get all content
// export const getAllContent = async (): Promise<ContentItem[]> => {
//   try {
//     console.log("Fetching content from Firestore...")
//     const q = query(collection(db, "content"), orderBy("createdAt", "desc"))
//     const querySnapshot = await getDocs(q)

//     const content = querySnapshot.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//       createdAt: doc.data().createdAt.toDate(),
//     })) as ContentItem[]

//     console.log(`Fetched ${content.length} content items`)
//     return content
//   } catch (error) {
//     console.error("Error fetching content:", error)
//     throw error
//   }
// }

// // Update content
// export const updateContent = async (id: string, updates: Partial<ContentItem>) => {
//   try {
//     const docRef = doc(db, "content", id)
//     await updateDoc(docRef, updates)
//     console.log("Content updated successfully")
//   } catch (error) {
//     console.error("Error updating content:", error)
//     throw error
//   }
// }

// // Delete content and associated files
// export const deleteContent = async (id: string, imageUrl?: string, pdfUrl?: string) => {
//   try {
//     // Delete document first
//     await deleteDoc(doc(db, "content", id))
//     console.log("Document deleted from Firestore")

//     // Then delete associated files
//     if (imageUrl) {
//       try {
//         const imageRef = ref(storage, imageUrl)
//         await deleteObject(imageRef)
//         console.log("Image deleted from Storage")
//       } catch (error) {
//         console.warn("Could not delete image:", error)
//       }
//     }

//     if (pdfUrl) {
//       try {
//         const pdfRef = ref(storage, pdfUrl)
//         await deleteObject(pdfRef)
//         console.log("PDF deleted from Storage")
//       } catch (error) {
//         console.warn("Could not delete PDF:", error)
//       }
//     }
//   } catch (error) {
//     console.error("Error deleting content:", error)
//     throw error
//   }
// }
