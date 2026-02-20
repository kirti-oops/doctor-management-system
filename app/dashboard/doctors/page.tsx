"use client";

import { useState } from "react";
import { doctors } from "@/data/doctor";
import { Card } from "@/components/ui/card";

export default function DoctorsPage() {
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Our Doctors 👨‍⚕️
      </h1>

      <input
        type="text"
        placeholder="Search doctor..."
        className="border p-2 mb-6 rounded w-1/3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {filteredDoctors.map((doc) => (
          <Card key={doc.id} className="p-4 rounded-xl shadow-lg">
            <img
              src={doc.image}
              alt={doc.name}
              className="w-full h-40 object-cover rounded-md mb-3"
            />

            <h3 className="font-bold text-lg">{doc.name}</h3>
            <p>🩺 {doc.specialization}</p>
            <p>🏥 {doc.hospital}</p>
            <p>⏳ {doc.experience}</p>
            <p>⭐ {doc.rating}</p>
            <p className="text-blue-600 font-semibold">
              ₹ {doc.fees}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}