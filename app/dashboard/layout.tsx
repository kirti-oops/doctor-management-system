"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import { LayoutDashboard, Users, LogOut } from "lucide-react";
import { useTheme } from "next-themes";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, logout } = useAuth();
  const { theme, setTheme } = useTheme();

  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">

        {/* Sidebar */}
        <div className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-8 text-blue-600">
            🏥 MediCare
          </h2>

          <Link
            href="/dashboard"
            className="flex items-center gap-2 mb-4 hover:text-blue-600"
          >
            <LayoutDashboard size={18} /> Dashboard
          </Link>

          <Link
            href="/dashboard/doctors"
            className="flex items-center gap-2 mb-4 hover:text-blue-600"
          >
            <Users size={18} /> Doctors
          </Link>

          {user?.role === "admin" && (
            <p className="mt-6 text-green-600 font-semibold">
              Admin Access Enabled
            </p>
          )}

          <Link
  href="/dashboard/logout"
  className="mt-6 bg-red-500 px-4 py-2 rounded block text-center"
>
  Logout
</Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className="mt-4 text-sm text-gray-500"
          >
            Toggle Theme
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-y-auto">
          {children}
        </div>
      </div>
    </ProtectedRoute>
  );
}