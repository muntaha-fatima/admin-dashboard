// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { CalendarIcon, Loader2 } from "lucide-react"
// import { format } from "date-fns"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Switch } from "@/components/ui/switch"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { useToast } from "@/hooks/use-toast"
// import { cn } from "@/lib/utils"

// const formSchema = z.object({
//   offerDetails: z.string().min(5, "Offer details must be at least 5 characters"),
//   code: z.string().optional(),
//   store: z.string().min(1, "Store is required"),
//   active: z.boolean().default(true),
//   isValid: z.boolean().default(true),
//   featuredForHome: z.boolean().default(false),
//   expirationDate: z.date().optional(),
// })

// type FormValues = z.infer<typeof formSchema>

// // Mock stores data
// const MOCK_STORES = [
//   { _id: "store1", name: "Amazon" },
//   { _id: "store2", name: "Walmart" },
//   { _id: "store3", name: "Best Buy" },
//   { _id: "store4", name: "Target" },
//   { _id: "store5", name: "Newegg" },
//   { _id: "store6", name: "eBay" },
// ]

// export default function NewCouponPage() {
//   const router = useRouter()
//   const { toast } = useToast()
//   const [isLoading, setIsLoading] = useState(false)

//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       offerDetails: "",
//       code: "",
//       store: "",
//       active: true,
//       isValid: true,
//       featuredForHome: false,
//     },
//   })

//   const onSubmit = async (data: FormValues) => {
//     // Validate that either code or active is provided
//     if (!data.code && !data.active) {
//       form.setError("code", {
//         type: "manual",
//         message: "Either code or active must be provided",
//       })
//       return
//     }

//     setIsLoading(true)

//     try {
//       // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500))

//       toast({
//         title: "Success",
//         description: "Coupon created successfully!",
//       })

//       // Redirect to the home page
//       router.push("/")
//     } catch (error) {
//       console.error("Failed to create coupon:", error)
//       toast({
//         title: "Error",
//         description: "Failed to create coupon. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>Create New Coupon</CardTitle>
//           <CardDescription>Add a new coupon to the marketplace. Fill in the details below.</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               <FormField
//                 control={form.control}
//                 name="offerDetails"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Offer Details</FormLabel>
//                     <FormControl>
//                       <Textarea placeholder="e.g., 20% Off Sitewide" {...field} className="resize-none" rows={3} />
//                     </FormControl>
//                     <FormDescription>Describe the offer in a clear and concise way.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="code"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Coupon Code (Optional)</FormLabel>
//                     <FormControl>
//                       <Input placeholder="e.g., SUMMER20" {...field} />
//                     </FormControl>
//                     <FormDescription>Leave blank for deals that don't require a code.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="store"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Store</FormLabel>
//                     <Select onValueChange={field.onChange} defaultValue={field.value}>
//                       <FormControl>
//                         <SelectTrigger>
//                           <SelectValue placeholder="Select a store" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         {MOCK_STORES.map((store) => (
//                           <SelectItem key={store._id} value={store._id}>
//                             {store.name}
//                           </SelectItem>
//                         ))}
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <FormField
//                   control={form.control}
//                   name="active"
//                   render={({ field }) => (
//                     <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                       <div className="space-y-0.5">
//                         <FormLabel className="text-base">Active</FormLabel>
//                         <FormDescription>Is this coupon currently active?</FormDescription>
//                       </div>
//                       <FormControl>
//                         <Switch checked={field.value} onCheckedChange={field.onChange} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="isValid"
//                   render={({ field }) => (
//                     <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                       <div className="space-y-0.5">
//                         <FormLabel className="text-base">Valid</FormLabel>
//                         <FormDescription>Is this coupon valid for use?</FormDescription>
//                       </div>
//                       <FormControl>
//                         <Switch checked={field.value} onCheckedChange={field.onChange} />
//                       </FormControl>
//                     </FormItem>
//                   )}
//                 />
//               </div>

//               <FormField
//                 control={form.control}
//                 name="featuredForHome"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
//                     <div className="space-y-0.5">
//                       <FormLabel className="text-base">Featured</FormLabel>
//                       <FormDescription>Show this coupon on the homepage featured section?</FormDescription>
//                     </div>
//                     <FormControl>
//                       <Switch checked={field.value} onCheckedChange={field.onChange} />
//                     </FormControl>
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="expirationDate"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col">
//                     <FormLabel>Expiration Date (Optional)</FormLabel>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <FormControl>
//                           <Button
//                             variant={"outline"}
//                             className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
//                           >
//                             {field.value ? format(field.value, "PPP") : "Select a date"}
//                             <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                           </Button>
//                         </FormControl>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-auto p-0" align="start">
//                         <Calendar
//                           mode="single"
//                           selected={field.value}
//                           onSelect={field.onChange}
//                           disabled={(date) => date < new Date()}
//                           initialFocus
//                         />
//                       </PopoverContent>
//                     </Popover>
//                     <FormDescription>When will this coupon expire? Leave blank if it doesn't expire.</FormDescription>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <Button type="submit" className="w-full" disabled={isLoading}>
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Creating...
//                   </>
//                 ) : (
//                   "Create Coupon"
//                 )}
//               </Button>
//             </form>
//           </Form>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button variant="outline" onClick={() => router.back()}>
//             Cancel
//           </Button>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }
