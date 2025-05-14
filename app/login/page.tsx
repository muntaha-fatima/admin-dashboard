'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => { 


    try {
      const res = await login(email, password);
      const token = res.token;
      localStorage.setItem("token", token);
      router.push("/"); // or wherever you want to redirect
    } catch (err: any) {
      setError(err?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-6">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <div className="space-y-4">
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           <form onSubmit={handleLogin}>
  {/* inputs here */}
  <Button type="submit">Login</Button>
</form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
