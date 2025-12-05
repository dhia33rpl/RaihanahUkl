"use client";

import Link from "next/link";
import { useState } from "react";

interface WriterCardProps {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
}

export default function WriterCard({
  id,
  name,
  avatarUrl,
  bio,
  followers,
}: WriterCardProps) {
  const [following, setFollowing] = useState(false);

  return (
    // --- Dibuat persegi panjang horizontal ---
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 flex items-center p-4 gap-4 h-40">
      {/* Foto di sebelah kiri */}
      <img
        src={avatarUrl}
        alt={name}
        className="w-28 h-28 rounded-xl object-cover"
      />

      {/* Konten sebelah kanan */}
      <div className="flex-1 flex flex-col justify-between h-full py-1">
        <div className="flex justify-between items-start">
          <div>
            <Link
              href={`/writers/${id}`}
              className="text-xl font-bold text-slate-800 hover:text-blue-600 transition-colors"
            >
              {name}
            </Link>

            <div className="flex items-center mt-1">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-slate-500">Active</span>
            </div>
          </div>

          <button
            onClick={() => setFollowing(!following)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              following
                ? "bg-green-100 text-green-700 border border-green-200 hover:bg-green-200"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {following ? " Following" : "+ Follow"}
          </button>
        </div>
        <p className="text-slate-600 line-clamp-2 text-sm">{bio}</p>

        <div className="flex justify-between items-center pt-2 border-t border-slate-200">
          <Link
            href={`/writers/${id}`}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            View Profile
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>

          <span className="text-sm text-slate-500">ID: {id}</span>
        </div>
      </div>
    </div>
  );
}
