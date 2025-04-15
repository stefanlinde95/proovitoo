import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="min-h-dvh">
      <div className="max-w-md mx-auto p-4 text-center space-y-4 mt-20">
        <h1 className="text-5xl lg:text-7xl font-bold">404</h1>
        <p className="text-gray-500">
          Palun proovi otsida uuesti või mine{" "}
          <Link href="/" className="text-red-600 underline">
            tagasi esilehele
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default NotFound;
