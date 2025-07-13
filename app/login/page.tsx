// 'use client';

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { login } from "@/lib/api";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import axios from "axios"; // required for checking axios errors

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const router = useRouter();

//   const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     try {
//       const res = await login(email, password);
//       const token = res.token;
//       localStorage.setItem("token", token);
//       router.push("/");
//     } catch (err) {
//       if (axios.isAxiosError(err)) {
//         setError(err.response?.data?.message || "Login failed");
//       } else {
//         setError("Login failed");
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <Card className="w-full max-w-md p-6">
//         <CardContent>
//           <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
//           {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

//           <form onSubmit={handleLogin} className="space-y-4">
//             <Input
//               placeholder="Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <Input
//               placeholder="Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <Button type="submit">Login</Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }






// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { login } from '@/lib/api';

// export default function LoginPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleLogin = async () => {
//   try {
//     const result = await login(email, password);
//     console.log("Logged in!", result);
//   } catch (err) {
//     console.error("Login failed:", err);
//   }
// };


//   return (
//     <div className="max-w-md mx-auto mt-20 space-y-4">
//       <h1 className="text-2xl font-bold">Login</h1>

//       <Input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <Input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />

//       {error && <p className="text-red-500 text-sm">{error}</p>}

//       <Button onClick={handleLogin} disabled={loading}>
//         {loading ? 'Logging in...' : 'Login'}
//       </Button>
//     </div>
//   );
// }












// "use client"

// import type React from "react"

// import { useState } from "react"
// import Link from "next/link"

// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { AlertCircle, Loader2 } from "lucide-react"
// import { login } from "../../lib/login"


// export default function LoginPage() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const router = useRouter()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError("")
//     setIsSubmitting(true)

//     try {
//       await login(email, password)
//       // Redirect is handled in the login function
//     } catch (err) {
//       setError(err instanceof Error ? err.message : "Login failed. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader>
//           <CardTitle className="text-2xl">Login</CardTitle>
//           <CardDescription>Enter your credentials to access your account</CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent className="space-y-4">

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="admin@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <div className="flex items-center justify-between">
//                 <Label htmlFor="password">Password</Label>
//                 <Link href="/forgot-password" className="text-xs text-primary hover:underline">
//                   Forgot password?
//                 </Link>
//               </div>
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col space-y-4">
//             <Button type="submit" className="w-full" disabled={isSubmitting}>
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
//                 </>
//               ) : (
//                 "Login"
//               )}
//             </Button>
//             <Button asChild variant="outline" className="w-full">
//               <Link href="/">Back to Home</Link>
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   )
// }
