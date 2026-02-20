"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function LogoutPage() {
  const { logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    logout(); // clear user
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">
          Logging out...
        </h1>
        <p className="text-gray-600">
          You are being redirected to login page.
        </p>
      </div>
    </div>
  );
}