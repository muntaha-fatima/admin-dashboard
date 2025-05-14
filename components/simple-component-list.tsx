// "use client"

// import Link from "next/link"
// import { Calendar, Check, ExternalLink } from "lucide-react"

// import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"

// // Hardcoded coupon data
// const MOCK_COUPONS = [

//     {
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
//       alt: "Store logo"
//       },
//       trackingUrl: "https://store.com?ref=couponsite"
//     },
//     featuredForHome: false,
//     hits: 0,
//     lastAccessed: "2025-05-08T10:00:00.000Z",
//     expirationDate: "2025-12-31T23:59:59.999Z"
//   }

// ]

// export function SimpleCouponList() {
//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {MOCK_COUPONS.map((coupon) => (
//           <Card key={coupon._id} className="h-full flex flex-col hover:shadow-md transition-shadow">
//             <CardHeader className="pb-2">
//               <div className="flex justify-between items-start">
//                 <div className="flex items-center space-x-3">
//                   <div className="h-10 w-10 rounded overflow-hidden bg-muted flex items-center justify-center">
//                     <img
//                       src={coupon.store.image?.url || "/https://example.com/image.jpg"}
//                       alt={coupon.store.image?.alt || coupon.store.name}
//                       className="h-full w-full object-contain"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-sm">{coupon.store.name}</h3>
//                     {coupon.active && coupon.isValid ? (
//                       <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
//                         <Check className="mr-1 h-3 w-3" /> Valid
//                       </Badge>
//                     ) : (
//                       <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 text-xs">
//                         Expired
//                       </Badge>
//                     )}
//                   </div>
//                 </div>

//                 {coupon.featuredForHome && (
//                   <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
//                     Featured
//                   </Badge>
//                 )}
//               </div>
//             </CardHeader>

//             <CardContent className="flex-grow">
//               <Link href={`/coupons/${coupon._id}`} className="block">
//                 <h2 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
//                   {coupon.offerDetails}
//                 </h2>

//                 {coupon.expirationDate && (
//                   <div className="flex items-center text-sm text-muted-foreground">
//                     <Calendar className="mr-1 h-3 w-3" />
//                     Expires: {new Date(coupon.expirationDate).toLocaleDateString()}
//                   </div>
//                 )}
//               </Link>
//             </CardContent>

//             <CardFooter className="pt-2">
//               {coupon.code ? (
//                 <Button
//                   asChild
//                   className="w-full"
//                   variant={coupon.active && coupon.isValid ? "default" : "outline"}
//                   disabled={!coupon.active || !coupon.isValid}
//                 >
//                   <Link href={`/coupons/${coupon._id}`}>Show Code</Link>
//                 </Button>
//               ) : (
//                 <Button
//                   className="w-full"
//                   variant={coupon.active && coupon.isValid ? "default" : "outline"}
//                   disabled={!coupon.active || !coupon.isValid}
//                   onClick={() => window.open(coupon.store.trackingUrl, "_blank")}
//                 >
//                   Get Deal <ExternalLink className="ml-1 h-4 w-4" />
//                 </Button>
//               )}
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }
