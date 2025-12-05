"use client";

import { useState } from "react";
import Link from "next/link";

type Props = {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
};

export default function WriterItem({ id, name, avatarUrl, bio, followers }: Props) {    //komponen untuk menampilkan item writer
  const [following, setFollowing] = useState(false); //state untuk mengikuti atau tidak
  const [count, setCount] = useState(followers); //state untuk menghitung jumlah followers

  function toggleFollow() {
    setFollowing((f) => {
      const nf = !f;
      setCount((c) => (nf ? c + 1 : c - 1));
      return nf;
    });
  }

  return (
    <div className="flex gap-4 items-start bg-white p-4 rounded shadow-sm">
      <img src={avatarUrl} alt={name} className="w-16 h-16 rounded-full object-cover" />
      <div className="flex-1">
        <Link href={`/writers/${id}`} className="text-lg font-semibold text-red-900 hover:underline">
          {name}
        </Link>
        <p className="text-sm text-slate-600 mt-1">{bio}</p>

        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={toggleFollow}
            className={`px-3 py-1 rounded-md text-sm ${
              following ? "bg-green-600 text-white" : "bg-blue-600 text-white"
            }`}
          >
            {following ? "Following" : "Follow"}
          </button>

          <div className="text-sm text-slate-600">{count.toLocaleString()} followers</div>
        </div>
      </div>
    </div>
  );
}
