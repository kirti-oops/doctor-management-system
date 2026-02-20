"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeartPulse } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white text-center">
      
      <HeartPulse size={80} className="animate-pulse mb-6" />

      <h1 className="text-5xl font-bold mb-6">
        Welcome to MediCare
      </h1>

      <p className="mb-8 text-lg">
        Manage doctors, appointments & dashboard securely
      </p>

      <div className="space-x-4">
        <Link href="/login">
          <Button className="bg-white text-blue-600">
            Login
          </Button>
        </Link>

        <Link href="/signup">
          <Button variant="outline" className="border-white text-white">
            Signup
          </Button>
        </Link>
      </div>
    </div>
  );
}