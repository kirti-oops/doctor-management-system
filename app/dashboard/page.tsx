"use client";

import { useAuth } from "@/context/AuthContext";

export default function DashboardHome() {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Welcome, {user?.email} 👋
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Total Doctors</h2>
          <p className="text-3xl mt-2">12</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Appointments</h2>
          <p className="text-3xl mt-2">34</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold">Role</h2>
          <p className="text-3xl mt-2 capitalize">
            {user?.role}
          </p>
        </div>
      </div>
    </div>
  );
}