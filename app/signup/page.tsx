"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Signup() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const handleSignup = async () => {
    await axios.post("http://localhost:5000/users", form);
    router.push("/login");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <Card className="p-8 w-[400px] rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Account
        </h2>

        <Input
          placeholder="Email"
          className="mb-3"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <Input
          type="password"
          placeholder="Password"
          className="mb-3"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <select
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <Button className="w-full" onClick={handleSignup}>
          Signup
        </Button>
      </Card>
    </div>
  );
}