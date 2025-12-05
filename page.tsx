import { writers } from "@/data/writers";
import Link from "next/link";

type Params = {
  id: string;
};

export default async function WriterDetail({ params }: { params: Params }) {  // menerima parameter params hrus berupa objek punya id berbentuk string
  const { id } = await params; //mengambil id dari params

  const writer = writers.find((w) => w.id === id); //mencari data writer yang idnya sesuai dengan params id

  if (!writer) {
    //kalau id ga cocok dengan data yang ad keluarny not found
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-red-100">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Writer Not Found
        </h1>

        <p className="text-slate-600 mb-6">
          ID yang kamu akses: <span className="font-semibold">{id}</span>
        </p>

        <Link
          href="/writers"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          ← Back to Writers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-red-100 min-h-screen items-center justify-center py-10 px-4">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 bg-white rounded-xl shadow-xl">
        <Link
          href="/writers"
          className="inline-block mb-6 text-blue-900 hover:underline"
        >
          ← Back to Writers
        </Link>

        <h1 className="text-3xl text-red-900 font-bold mb-4">{writer.name}</h1>

        <p className="text-slate-600 mb-6">{writer.bio}</p>

        <div className="flex justify-center mb-6">
          <img
            src={writer.avatarUrl}
            alt={writer.name}
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        <p className="text-center text-lg text-slate-600">
          Followers:{" "}
          <span className="font-semibold">
            {(writer.followers / 1000).toFixed(1)}k
          </span>
        </p>
      </div>
    </div>
  );
}
