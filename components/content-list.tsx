// // 


// "use client";

// import { useEffect, useState } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { Filter, X } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { fetchStores } from "@/lib/api";
// import { toast } from "sonner";

// interface Store {
//   _id: string;
//   name: string;
// }

// export function CouponFilters() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const [stores, setStores] = useState<Store[]>([]);
//   const [storesLoading, setStoresLoading] = useState(true);

//   const currentStore = searchParams.get("store") || "";
//   const isActive = searchParams.get("active") === "true";
//   const isValid = searchParams.get("isValid") !== "false";
//   const isFeatured = searchParams.get("featuredForHome") === "true";

//   useEffect(() => {
//     const getStores = async () => {
//       try {
//         const data = await fetchStores();
//         setStores(data);
//       } catch (err: any) {
//         toast.error(err?.message || "Failed to fetch stores");
//       } finally {
//         setStoresLoading(false);
//       }
//     };

//     getStores();
//   }, []);

//   const createQueryString = (params: Record<string, string | null>) => {
//     const newParams = new URLSearchParams(searchParams.toString());
//     newParams.set("page", "1");

//     Object.entries(params).forEach(([key, value]) => {
//       if (value === null) newParams.delete(key);
//       else newParams.set(key, value);
//     });

//     return newParams.toString();
//   };

//   const handleStoreChange = (storeId: string) => {
//     const params = { store: storeId === "all" ? null : storeId };
//     router.push(`${pathname}?${createQueryString(params)}`);
//   };

//   const handleCheckboxChange = (key: string, checked: boolean) => {
//     const value = key === "isValid" ? (checked ? "true" : "false") : checked ? "true" : null;
//     router.push(`${pathname}?${createQueryString({ [key]: value })}`);
//   };

//   const clearFilters = () => {
//     router.push(pathname);
//   };

//   const hasFilters = currentStore || isActive || !isValid || isFeatured;

//   return (
//     <Card>
//       <CardHeader className="pb-3">
//         <div className="flex justify-between items-center">
//           <CardTitle className="text-lg flex items-center">
//             <Filter className="mr-2 h-4 w-4" /> Filters
//           </CardTitle>
//           {hasFilters && (
//             <Button variant="ghost" size="sm" onClick={clearFilters} className="h-8 text-xs">
//               <X className="mr-1 h-3 w-3" /> Clear
//             </Button>
//           )}
//         </div>
//       </CardHeader>

//       <CardContent className="space-y-6">
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Store</label>
//           <Select
//             value={currentStore || "all"}
//             onValueChange={handleStoreChange}
//             disabled={storesLoading}
//           >
//             <SelectTrigger>
//               <SelectValue placeholder="All Stores" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Stores</SelectItem>
//               {stores.map((store) => (
//                 <SelectItem key={store._id} value={store._id}>
//                   {store.name}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-3">
//           <label className="text-sm font-medium">Status</label>

//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="active"
//               checked={isActive}
//               onCheckedChange={(checked) =>
//                 handleCheckboxChange("active", checked as boolean)
//               }
//             />
//             <label htmlFor="active" className="text-sm">
//               Active coupons only
//             </label>
//           </div>

//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="valid"
//               checked={isValid}
//               onCheckedChange={(checked) =>
//                 handleCheckboxChange("isValid", checked as boolean)
//               }
//             />
//             <label htmlFor="valid" className="text-sm">
//               Valid coupons only
//             </label>
//           </div>

//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="featured"
//               checked={isFeatured}
//               onCheckedChange={(checked) =>
//                 handleCheckboxChange("featuredForHome", checked as boolean)
//               }
//             />
//             <label htmlFor="featured" className="text-sm">
//               Featured coupons only
//             </label>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }








// "use client";

// import { useEffect, useState, useMemo } from "react";
// import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { Filter, X, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { fetchStores } from "@/lib/firebase";
// import { toast } from "sonner";

// interface Store {
//   _id: string;
//   name: string;
// }

// export function CouponFilters() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const [stores, setStores] = useState<Store[]>([]);
//   const [storesLoading, setStoresLoading] = useState(true);

//   const currentStore = useMemo(() => searchParams.get("store") || "", [searchParams]);
//   const isActive = useMemo(() => searchParams.get("active") === "true", [searchParams]);
//   const isValid = useMemo(() => searchParams.get("isValid") === "true", [searchParams]);
//   const isFeatured = useMemo(() => searchParams.get("featuredForHome") === "true", [searchParams]);
//   const hasFilters = useMemo(
//     () => currentStore || isActive || isValid || isFeatured,
//     [currentStore, isActive, isValid, isFeatured]
//   );

//   useEffect(() => {
//     const abortController = new AbortController();

//     const getStores = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         if (!token) {
//           toast.error("Please log in to view stores");
//           setStoresLoading(false);
//           return;
//         }

//         const data = await fetchStores(abortController.signal); // ✅ PLACE IT HERE
//         setStores(data); // ✅ Update state with fetched stores
//       } catch (err: any) {
//         if (err.name === "AbortError") return;
//         toast.error(err?.message || "Failed to fetch stores");
//       } finally {
//         setStoresLoading(false);
//       }
//     };

//     getStores();

//     return () => abortController.abort(); // cleanup on unmount
//   }, []);

//   const createQueryString = (params: Record<string, string | null | boolean>) => {
//     const newParams = new URLSearchParams(searchParams.toString());
//     newParams.set("page", "1");

//     Object.entries(params).forEach(([key, value]) => {
//       if (value === null || value === undefined) {
//         newParams.delete(key);
//       } else {
//         newParams.set(key, value.toString());
//       }
//     });

//     return newParams.toString();
//   };

//   const handleStoreChange = (storeId: string) => {
//     const params = { store: storeId === "all" ? null : storeId };
//     router.push(`${pathname}?${createQueryString(params)}`);
//   };

//   const handleCheckboxChange = (key: string, checked: boolean) => {
//     const value = key === "isValid" ? (checked ? "true" : "false") : checked ? "true" : null;
//     router.push(`${pathname}?${createQueryString({ [key]: value })}`);
//   };

//   const clearFilters = () => {
//     router.push(pathname);
//   };

//   return (
//     <Card>
//       <CardHeader className="pb-3">
//         <div className="flex justify-between items-center">
//           <CardTitle className="text-lg flex items-center">
//             <Filter className="mr-2 h-4 w-4" /> Filters
//           </CardTitle>
//           {hasFilters && (
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={clearFilters}
//               className="h-8 text-xs"
//               aria-label="Clear all filters"
//             >
//               <X className="mr-1 h-3 w-3" /> Clear
//             </Button>
//           )}
//         </div>
//       </CardHeader>

//       <CardContent className="space-y-6">
//         <div className="space-y-2">
//           <label className="text-sm font-medium">Store</label>
//           <Select
//             value={currentStore || "all"}
//             onValueChange={handleStoreChange}
//             disabled={storesLoading}
//             name="store"
//           >
//             <SelectTrigger aria-label="Select a store">
//               {storesLoading ? (
//                 <span className="flex items-center">
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                   Loading stores...
//                 </span>
//               ) : (
//                 <SelectValue placeholder="All Stores" />
//               )}
//             </SelectTrigger>
//             <SelectContent>
//               {stores.length === 0 ? (
//                 <div className="text-sm text-muted-foreground p-2">No stores available</div>
//               ) : (
//                 <>
//                   <SelectItem value="all">All Stores</SelectItem>
//                   {stores.map((store) => (
//                     <SelectItem key={store._id} value={store._id}>
//                       {store.name}
//                     </SelectItem>
//                   ))}
//                 </>
//               )}
//             </SelectContent>
//           </Select>
//         </div>

//         <div className="space-y-3">
//           <label className="text-sm font-medium">Status</label>

//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="active"
//               name="active"
//               checked={isActive}
//               onCheckedChange={(checked) => handleCheckboxChange("active", checked as boolean)}
//               aria-describedby="active-description"
//             />
//             <label htmlFor="active" className="text-sm">
//               Active coupons only
//             </label>
//             <span id="active-description" className="sr-only">
//               Filter coupons to show only active ones
//             </span>
//           </div>

//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="valid"
//               name="valid"
//               checked={isValid}
//               onCheckedChange={(checked) => handleCheckboxChange("isValid", checked as boolean)}
//               aria-describedby="valid-description"
//             />
//             <label htmlFor="valid" className="text-sm">
//               Valid coupons only
//             </label>
//             <span id="valid-description" className="sr-only">
//               Filter coupons to show only valid ones
//             </span>
//           </div>

//           <div className="flex items-center space-x-2">
//             <Checkbox
//               id="featured"
//               name="featured"
//               checked={isFeatured}
//               onCheckedChange={(checked) =>
//                 handleCheckboxChange("featuredForHome", checked as boolean)
//               }
//               aria-describedby="featured-description"
//             />
//             <label htmlFor="featured" className="text-sm">
//               Featured coupons only
//             </label>
//             <span id="featured-description" className="sr-only">
//               Filter coupons to show only featured ones
//             </span>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }"use client"import { useState, useEffect } from "react"


// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Trash2, ExternalLink, FileText, ImageIcon } from "lucide-react"
// import { getAllContent, deleteContent, type ContentItem } from "../lib/firebase-opertion"
// import Image from "next/image"
// import { toast } from "sonner"

// export default function ContentList({ refresh }: { refresh: number }) {
//   const [content, setContent] = useState<ContentItem[]>([])
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     fetchContent()
//   }, [refresh])

//   const fetchContent = async () => {
//     try {
//       const data = await getAllContent()
//       setContent(data)
//     } catch (error) {
//       toast.error("Failed to fetch content")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleDelete = async (item: ContentItem) => {
//     if (!confirm("Are you sure you want to delete this content?")) return

//     try {
//       await deleteContent(item.id!, item.imageUrl, item.pdfUrl)
//       toast.success("Content deleted successfully")
//       fetchContent()
//     } catch (error) {
//       toast.error("Failed to delete content")
//     }
//   }

//   if (loading) {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {[...Array(6)].map((_, i) => (
//           <Card key={i} className="animate-pulse">
//             <CardHeader>
//               <div className="h-4 bg-gray-200 rounded w-3/4"></div>
//               <div className="h-3 bg-gray-200 rounded w-1/2"></div>
//             </CardHeader>
//             <CardContent>
//               <div className="h-20 bg-gray-200 rounded mb-4"></div>
//               <div className="h-3 bg-gray-200 rounded"></div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-4">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold">All Content ({content.length})</h2>
//       </div>

//       {content.length === 0 ? (
//         <Card>
//           <CardContent className="text-center py-8">
//             <p className="text-muted-foreground">No content found. Add some content to get started.</p>
//           </CardContent>
//         </Card>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {content.map((item) => (
//             <Card key={item.id} className="hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <CardTitle className="line-clamp-2">{item.title}</CardTitle>
//                 <CardDescription>by {item.author}</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 {item.imageUrl && (
//                   <div className="relative h-32 w-full rounded-md overflow-hidden">
//                     <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
//                   </div>
//                 )}

//                 <p className="text-sm text-muted-foreground line-clamp-3">{item.description}</p>

//                 <div className="flex flex-wrap gap-2">
//                   {item.imageUrl && (
//                     <Badge variant="secondary" className="text-xs">
//                       <ImageIcon className="w-3 h-3 mr-1" />
//                       Image
//                     </Badge>
//                   )}
//                   {item.pdfUrl && (
//                     <Badge variant="secondary" className="text-xs">
//                       <FileText className="w-3 h-3 mr-1" />
//                       PDF
//                     </Badge>
//                   )}
//                 </div>

//                 <div className="flex justify-between items-center pt-2">
//                   <div className="flex gap-2">
//                     {item.imageUrl && (
//                       <Button size="sm" variant="outline" onClick={() => window.open(item.imageUrl, "_blank")}>
//                         <ExternalLink className="w-3 h-3" />
//                       </Button>
//                     )}
//                     {item.pdfUrl && (
//                       <Button size="sm" variant="outline" onClick={() => window.open(item.pdfUrl, "_blank")}>
//                         <FileText className="w-3 h-3" />
//                       </Button>
//                     )}
//                   </div>

//                   <Button size="sm" variant="destructive" onClick={() => handleDelete(item)}>
//                     <Trash2 className="w-3 h-3" />
//                   </Button>
//                 </div>

//                 <div className="text-xs text-muted-foreground">Added: {item.createdAt.toLocaleDateString()}</div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }
