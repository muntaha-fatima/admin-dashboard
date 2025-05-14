// "use client"

// import { useEffect, useState } from "react"
// import { useParams, useRouter } from "next/navigation"
// import { ArrowLeft, Calendar, Check, Copy, ExternalLink, X } from "lucide-react"
// import { format } from "date-fns"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Badge } from "@/components/ui/badge"
// import { toast } from 'sonner';
// import { trackCouponUsage } from "@/lib/api"
// import { useSonner } from "sonner"

// interface Coupon {
//   _id: string
//   offerDetails: string
//   code: string
//   active: boolean
//   isValid: boolean
//   store: {
//     _id: string
//     name: string
//     image: {
//       url: string
//       alt: string
//     }
//     trackingUrl: string
//   }
//   featuredForHome: boolean
//   hits: number
//   lastAccessed: string
//   expirationDate: string
// }

// export default function CouponDetailPage() {
//   const params = useParams()
//   const router = useRouter()
//   const { toasts } = useSonner()
//   const [coupon, setCoupon] = useState<Coupon | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [copied, setCopied] = useState(false)

//   const couponId = params.id as string

//   useEffect(() => {
//     const fetchCoupon = async () => {
//       try {
//         const response = await fetch(`https://coupon-app-backend.vercel.app/api/coupons/${couponId}`)

//         if (!response.ok) {
//           throw new Error("Failed to fetch coupon")
//         }

//         const data = await response.json()
//         setCoupon(data.data)
//       } catch (err) {
//         setError("Failed to load coupon details")
//         console.error(err)
//       } finally {
//         setLoading(false)
//       }
//     }

//     if (couponId) {
//       fetchCoupon()
//     }
//   }, [couponId])

//   const handleCopyCode = () => {
//     if (coupon?.code) {
//       navigator.clipboard.writeText(coupon.code)
//       setCopied(true)
//       toast({
//         title: "Code copied!",
//         description: "The coupon code has been copied to your clipboard.",
//       })

//       setTimeout(() => setCopied(false), 3000)
//     }
//   }

//   const handleUseCode = async () => {
//     if (coupon?._id) {
//       try {
//         await trackCouponUsage(coupon._id)
//         window.open(coupon.store.trackingUrl, "_blank")
//       } catch (err) {
//         console.error("Failed to track coupon usage:", err)
//         // Still open the store URL even if tracking fails
//         window.open(coupon.store.trackingUrl, "_blank")
//       }
//     }
//   }

//   if (loading) {
//     return (
//       <div className="container mx-auto py-8 px-4">
//         <Button variant="ghost" onClick={() => router.back()} className="mb-6">
//           <ArrowLeft className="mr-2 h-4 w-4" /> Back
//         </Button>
//         <Card>
//           <CardHeader>
//             <Skeleton className="h-8 w-3/4 mb-2" />
//             <Skeleton className="h-4 w-1/2" />
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="flex items-center space-x-4">
//               <Skeleton className="h-16 w-16 rounded-md" />
//               <div className="space-y-2">
//                 <Skeleton className="h-4 w-24" />
//                 <Skeleton className="h-4 w-32" />
//               </div>
//             </div>
//             <Skeleton className="h-20 w-full" />
//           </CardContent>
//           <CardFooter>
//             <Skeleton className="h-10 w-full" />
//           </CardFooter>
//         </Card>
//       </div>
//     )
//   }

//   if (error || !coupon) {
//     return (
//       <div className="container mx-auto py-8 px-4">
//         <Button variant="ghost" onClick={() => router.back()} className="mb-6">
//           <ArrowLeft className="mr-2 h-4 w-4" /> Back
//         </Button>
//         <Card>
//           <CardContent className="py-8">
//             <div className="text-center">
//               <X className="mx-auto h-12 w-12 text-destructive mb-4" />
//               <h2 className="text-xl font-semibold mb-2">Coupon Not Found</h2>
//               <p className="text-muted-foreground mb-4">
//                 The coupon you're looking for doesn't exist or has been removed.
//               </p>
//               <Button onClick={() => router.push("/")}>Browse Coupons</Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     )
//   }

//   const isExpired = coupon.expirationDate && new Date(coupon.expirationDate) < new Date()

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <Button variant="ghost" onClick={() => router.back()} className="mb-6">
//         <ArrowLeft className="mr-2 h-4 w-4" /> Back
//       </Button>

//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <CardTitle className="text-2xl">{coupon.offerDetails}</CardTitle>
//             <div className="flex space-x-2">
//               {coupon.active && coupon.isValid && !isExpired ? (
//                 <Badge variant="success" className="bg-green-100 text-green-800">
//                   <Check className="mr-1 h-3 w-3" /> Valid
//                 </Badge>
//               ) : (
//                 <Badge variant="destructive">
//                   <X className="mr-1 h-3 w-3" /> Expired
//                 </Badge>
//               )}
//               {coupon.featuredForHome && (
//                 <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
//                   Featured
//                 </Badge>
//               )}
//             </div>
//           </div>
//           <CardDescription>
//             {coupon.expirationDate && (
//               <div className="flex items-center text-muted-foreground">
//                 <Calendar className="mr-1 h-4 w-4" />
//                 Expires: {format(new Date(coupon.expirationDate), "MMMM d, yyyy")}
//               </div>
//             )}
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="space-y-6">
//           <div className="flex items-center space-x-4">
//             <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
//               {coupon.store.image?.url ? (
//                 <img
//                   src={coupon.store.image.url || "/placeholder.svg"}
//                   alt={coupon.store.image.alt || coupon.store.name}
//                   className="h-full w-full object-contain"
//                 />
//               ) : (
//                 <div className="text-xl font-bold text-center">{coupon.store.name.charAt(0)}</div>
//               )}
//             </div>
//             <div>
//               <h3 className="font-medium">{coupon.store.name}</h3>
//               <p className="text-sm text-muted-foreground">Used {coupon.hits} times</p>
//             </div>
//           </div>

//           {coupon.code && (
//             <div className="border rounded-md p-4">
//               <div className="text-sm text-muted-foreground mb-2">Coupon Code:</div>
//               <div className="flex items-center justify-between bg-muted p-3 rounded">
//                 <code className="font-mono text-lg font-semibold">{coupon.code}</code>
//                 <Button size="sm" variant="ghost" onClick={handleCopyCode}>
//                   {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </CardContent>

//         <CardFooter>
//           <Button
//             className="w-full"
//             size="lg"
//             onClick={handleUseCode}
//             disabled={!coupon.active || !coupon.isValid || isExpired}
//           >
//             {coupon.code ? "Use This Code" : "Shop Now"} <ExternalLink className="ml-2 h-4 w-4" />
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }









// "use client"

// import { useParams, useRouter } from "next/navigation"
// import { ArrowLeft, Calendar, Check, Copy, ExternalLink } from "lucide-react"
// import { useState } from "react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { toast, useSonner } from 'sonner'

// // Dummy data
// const MOCK_COUPONS = {
//   coupon1: {
//     _id: "coupon_id",
//     offerDetails: "Offer description",
//     code: "COUPON123",
//     active: true,
//     isValid: true,
//     store: {
//       _id: "store_id",
//       name: "Store Name",
//       image: {
//         url: "https://example.com/image.jpg",
//         alt: "Store logo"
//       },
//       trackingUrl: "https://store.com?ref=couponsite"
//     },
//     featuredForHome: false,
//     hits: 0,
//     lastAccessed: "2025-05-08T10:00:00.000Z",
//     expirationDate: "2025-12-31T23:59:59.999Z"
//   }
//   // ... (You can keep adding more as needed)
// }

// export default function CouponDetailPage() {
//   const params = useParams()
//   const router = useRouter()
//   const { toasts } = useSonner()
//   const [copied, setCopied] = useState(false)

//   const couponId = params.id as string
// console.log("Coupon ID:", couponId) // Yeh line add karo
// const coupon = MOCK_COUPONS[couponId as keyof typeof MOCK_COUPONS]



//   if (!coupon) {
//     return (
//       <div className="container mx-auto py-8 px-4">
//         <Button variant="ghost" onClick={() => router.back()} className="mb-6">
//           <ArrowLeft className="mr-2 h-4 w-4" /> Back
//         </Button>
//         <Card>
//           <CardContent className="py-8">
//             <div className="text-center">
//               <h2 className="text-xl font-semibold mb-2">Coupon Not Found</h2>
//               <p className="text-muted-foreground mb-4">
//                 The coupon you're looking for doesn't exist or has been removed.
//               </p>
//               <Button onClick={() => router.push("/")}>Browse Coupons</Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     )
//   }

//   const handleCopyCode = () => {
//     if (coupon.code) {
//       navigator.clipboard.writeText(coupon.code)
//       setCopied(true)

//      toast.success("Coupon code clipboard mein copy ho gaya!")


//       setTimeout(() => setCopied(false), 3000)
//     }
//   }

//   const handleUseCode = () => {
//     window.open(coupon.store.trackingUrl, "_blank")
//   }

//   const isExpired = coupon.expirationDate && new Date(coupon.expirationDate) < new Date()

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <Button variant="ghost" onClick={() => router.back()} className="mb-6">
//         <ArrowLeft className="mr-2 h-4 w-4" /> Back
//       </Button>

//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <CardTitle className="text-2xl">{coupon.offerDetails}</CardTitle>
//             <div className="flex space-x-2">
//               {coupon.active && coupon.isValid && !isExpired ? (
//                 <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
//                   <Check className="mr-1 h-3 w-3" /> Valid
//                 </Badge>
//               ) : (
//                 <Badge variant="destructive">Expired</Badge>
//               )}
//               {coupon.featuredForHome && (
//                 <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
//                   Featured
//                 </Badge>
//               )}
//             </div>
//           </div>
//           <CardDescription>
//             {coupon.expirationDate && (
//               <div className="flex items-center text-muted-foreground mt-2">
//                 <Calendar className="mr-1 h-4 w-4" />
//                 Expires: {new Date(coupon.expirationDate).toLocaleDateString()}
//               </div>
//             )}
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="space-y-6">
//           <div className="flex items-center space-x-4">
//             <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
//               <img
//                 src={coupon.store.image?.url || "/placeholder.svg"}
//                 alt={coupon.store.image?.alt || coupon.store.name}
//                 className="h-full w-full object-contain"
//               />
//             </div>
//             <div>
//               <h3 className="font-medium">{coupon.store.name}</h3>
//               <p className="text-sm text-muted-foreground">Used {coupon.hits} times</p>
//             </div>
//           </div>

//           {coupon.code && (
//             <div className="border rounded-md p-4">
//               <div className="text-sm text-muted-foreground mb-2">Coupon Code:</div>
//               <div className="flex items-center justify-between bg-muted p-3 rounded">
//                 <code className="font-mono text-lg font-semibold">{coupon.code}</code>
//                 <Button size="sm" variant="ghost" onClick={handleCopyCode}>
//                   {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </CardContent>

//         <CardFooter>
//           <button className="bg-blue-500 text-white">Click Me</button>

//         </CardFooter>
//       </Card>
//     </div>
//   )
// }






// "use client"

// import { useParams, useRouter } from "next/navigation"
// import { ArrowLeft, Calendar, Check, Copy, ExternalLink, X } from "lucide-react"
// import { useEffect, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { toast } from "sonner"
// import { CouponCard } from "@/components/coupon-card"

// // Dummy coupons
// const MOCK_COUPONS = {
//   coupon1:{
//     _id: "coupon_id",
//     offerDetails: "Offer description",
//     "code": "COUPON123",
//     "active": true,
//     "isValid": true,
//     "store": {
//       "_id": "store_id",
//       "name": "Store Name",
//       image: {
//         url: "https://example.com/image.jpg",
//         "alt": "Store logo"
//       },
//       trackingUrl: "https://store.com?ref=couponsite"
//     },
//     "featuredForHome": false,
//     "hits": 0,
//     "lastAccessed": "2025-05-08T10:00:00.000Z",
//     "expirationDate": "2025-12-31T23:59:59.999Z"
//   }
// }
 
// export default function CouponDetailPage() {
//   const router = useRouter()
//   const params = useParams()
//   const couponId = params?.id as string

//   const [copied, setCopied] = useState(false)

//   const coupon = MOCK_COUPONS[couponId as keyof typeof MOCK_COUPONS]
//   const isExpired = coupon?.expirationDate && new Date(coupon.expirationDate) < new Date()

//   const handleCopyCode = () => {
//     if (coupon?.code) {
//       navigator.clipboard.writeText(coupon.code)
//       setCopied(true)
//       toast.success("Coupon code clipboard mein copy ho gaya!")
//       setTimeout(() => setCopied(false), 3000)
//     }
//   }

//   const handleUseCode = () => {
//     if (coupon?.store?.trackingUrl) {
//       window.open(coupon.store.trackingUrl, "_blank")
//     }
//   }

//   if (!coupon) {
//     return (
//       <div className="container mx-auto py-8 px-4">
//         <Button variant="ghost" onClick={() => router.back()} className="mb-6">
//           <ArrowLeft className="mr-2 h-4 w-4" /> Back
//         </Button>
//         <Card>
//           <CardContent className="py-8">
//             <div className="text-center">
//               <X className="mx-auto h-12 w-12 text-red-500 mb-4" />
//               <h2 className="text-xl font-semibold mb-2">Coupon Not Found</h2>
//               <p className="text-muted-foreground mb-4">
//                 The coupon you're looking for doesn't exist or has been removed.
//               </p>
//               <Button onClick={() => router.push("/")}>Browse Coupons</Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     )
//   }

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <Button variant="ghost" onClick={() => router.back()} className="mb-6">
//         <ArrowLeft className="mr-2 h-4 w-4" /> Back
//       </Button>

//       <Card>
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <CardTitle className="text-2xl">{coupon.offerDetails}</CardTitle>
//             <div className="flex space-x-2">
//               {coupon.active && coupon.isValid && !isExpired ? (
//                 <Badge className="bg-green-100 text-green-800 border-green-200">
//                   <Check className="mr-1 h-3 w-3" /> Valid
//                 </Badge>
//               ) : (
//                 <Badge variant="destructive">
//                   <X className="mr-1 h-3 w-3" /> Expired
//                 </Badge>
//               )}
//               {coupon.featuredForHome && (
//                 <Badge className="bg-amber-100 text-amber-800 border-amber-200">
//                   Featured
//                 </Badge>
//               )}
//             </div>
//           </div>
//           <CardDescription>
//             {coupon.expirationDate && (
//               <div className="flex items-center text-muted-foreground mt-2">
//                 <Calendar className="mr-1 h-4 w-4" />
//                 Expires: {new Date(coupon.expirationDate).toISOString().split("T")[0]}
//               </div>
//             )}
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="space-y-6">
//           <div className="flex items-center space-x-4">
//             <div className="h-16 w-16 rounded-md overflow-hidden bg-muted flex items-center justify-center">
//               <img
//                 src={coupon.store.image?.url || "https://example.com/image.jpg"}
//                 alt={coupon.store.image?.alt || coupon.store.name}
//                 onError={(e) => (e.currentTarget.src = "https://example.com/image.jpg")}
//                 className="h-full w-full object-contain"
//               />
//             </div>
//             <div>
//               <h3 className="font-medium">{coupon.store.name}</h3>
//               <p className="text-sm text-muted-foreground">Used {coupon.hits} times</p>
//             </div>
//           </div>

//           {coupon.code && (
//             <div className="border rounded-md p-4">
//               <div className="text-sm text-muted-foreground mb-2">Coupon Code:</div>
//               <div className="flex items-center justify-between bg-muted p-3 rounded">
//                 <code className="font-mono text-lg font-semibold">{coupon.code}</code>
//                 <Button size="sm" variant="ghost" onClick={handleCopyCode}>
//                   {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
//                 </Button>
//               </div>
//             </div>
//           )}
//         </CardContent>

//         <CardFooter>
//          <Button
//   className="w-full"
//   size="lg"
//   onClick={handleUseCode}
// disabled={!coupon.active || !coupon.isValid || isExpired ? true : false}
// >
//   {coupon.code ? "Use This Code" : "Shop Now"} <ExternalLink className="ml-2 h-4 w-4" />
// </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }
