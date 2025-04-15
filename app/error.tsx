"use client";

import Link from "next/link";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="container mx-auto space-y-8 p-4">
      <h2 className="text-2xl font-bold">Midagi läks valesti</h2>
      <div className="flex items-center gap-x-4">
        <button
          aria-label="Proovi uuesti"
          className="px-6 py-1 bg-white border border-red-600 text-red-600 hover:border-red-700 hover:text-red-700 duration-300 ease-out rounded-lg cursor-pointer"
          onClick={() => reset()}
        >
          Proovi uuesti
        </button>
        <div className="text-center text-neutral-400">Või</div>
        <Link
          href="/"
          className="px-6 py-1 bg-white border border-red-600 text-red-600 hover:border-red-700 hover:text-red-700 duration-300 ease-out rounded-lg"
        >
          Mine tagasi
        </Link>
      </div>
    </main>
  );
}
