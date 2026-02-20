"use client";


import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
  if (email && password) {
    login({ email, role: "admin" });
    router.push("/dashboard");
  } else {
    alert("Enter credentials");
  }
};
    

    

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Card className="p-8 w-[400px] rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <Input
          placeholder="Email"
          className="mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          className="mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button className="w-full" onClick={handleLogin}>
          Login
        </Button>
      </Card>
    </div>
  );
}