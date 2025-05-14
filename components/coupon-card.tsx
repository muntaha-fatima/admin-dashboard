// "use client"

// import type React from "react"

// import Link from "next/link"
// import { Calendar, Check, ExternalLink, X } from "lucide-react"
// import { format } from "date-fns"

// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { trackCouponUsage } from "@/lib/api"

// interface Coupon {
//   _id: string
//   offerDetails: string
//   code: string | null
//   active: boolean
//   isValid: boolean
//   store: {
//     _id: string
//     name: string
//     image: {
//       url: string
//       alt: string
//     }
//     trackingUrl?: string
//   }
//   featuredForHome: boolean
//   expirationDate: string | null
// }

// interface CouponCardProps {
//   coupon: Coupon
// }

// export function CouponCard({ coupon }: CouponCardProps) {
//   const isExpired = coupon.expirationDate && new Date(coupon.expirationDate) < new Date()
//   const isValid = coupon.active && coupon.isValid && !isExpired

//   const handleUseCode = async (e: React.MouseEvent) => {
//     e.preventDefault()

//     if (coupon._id && coupon.store.trackingUrl) {
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

//   return (
//     <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
//       <CardHeader className="pb-2">
//         <div className="flex justify-between items-start">
//           <div className="flex items-center space-x-3">
//             <div className="h-10 w-10 rounded overflow-hidden bg-muted flex items-center justify-center">
//               {coupon.store.image?.url ? (
//                 <img
//                   src={coupon.store.image.url || "/placeholder.svg"}
//                   alt={coupon.store.image.alt || coupon.store.name}
//                   className="h-full w-full object-contain"
//                 />
//               ) : (
//                 <div className="text-lg font-bold text-center">{coupon.store.name.charAt(0)}</div>
//               )}
//             </div>
//             <div>
//               <h3 className="font-medium text-sm">{coupon.store.name}</h3>
//               {isValid ? (
//                 <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
//                   <Check className="mr-1 h-3 w-3" /> Valid
//                 </Badge>
//               ) : (
//                 <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs">
//                   <X className="mr-1 h-3 w-3" /> Expired
//                 </Badge>
//               )}
//             </div>
//           </div>

//           {coupon.featuredForHome && (
//             <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
//               Featured
//             </Badge>
//           )}
//         </div>
//       </CardHeader>

//       <CardContent className="flex-grow">
//         <Link href={`/coupons/${coupon._id}`} className="block">
//           <h2 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
//             {coupon.offerDetails}
//           </h2>

//           {coupon.expirationDate && (
//             <div className="flex items-center text-sm text-muted-foreground">
//               <Calendar className="mr-1 h-3 w-3" />
//               Expires: {format(new Date(coupon.expirationDate), "MMM d, yyyy")}
//             </div>
//           )}
//         </Link>
//       </CardContent>

//       <CardFooter className="pt-2">
//         {coupon.code ? (
//           <Button asChild className="w-full" variant={isValid ? "default" : "outline"} disabled={!isValid}>
//             <Link href={`/coupons/${coupon._id}`}>Show Code</Link>
//           </Button>
//         ) : (
//           <Button
//             className="w-full"
//             variant={isValid ? "default" : "outline"}
//             disabled={!isValid}
//             onClick={handleUseCode}
//           >
//             Get Deal <ExternalLink className="ml-1 h-4 w-4" />
//           </Button>
//         )}
//       </CardFooter>
//     </Card>
//   )
// }
