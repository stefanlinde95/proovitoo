import React from "react";

const Skeleton = () => {
  return (
    <div
      className="animate-pulse space-y-2 min-h-72"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Andmete laadimine...</span>
      <div className="h-6 bg-gray-200 rounded w-2/3" aria-hidden="true" />
      <div className="h-4 bg-gray-100 rounded w-full" aria-hidden="true" />
      <div className="h-4 bg-gray-100 rounded w-5/6" aria-hidden="true" />
      <div className="h-4 bg-gray-100 rounded w-5/6" aria-hidden="true" />
      <br />
      <div className="h-4 bg-gray-100 rounded w-full" aria-hidden="true" />
      <div className="h-4 bg-gray-100 rounded w-5/6" aria-hidden="true" />
      <div className="h-4 bg-gray-100 rounded w-5/6" aria-hidden="true" />
    </div>
  );
};

export default Skeleton;
