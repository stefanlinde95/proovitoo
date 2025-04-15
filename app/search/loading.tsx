export default function Loading() {
  return (
    <div
      className="container mx-auto px-4 py-8 lg:py-12 animate-pulse space-y-4 min-h-screen"
      role="status"
      aria-busy="true"
      aria-live="polite"
    >
      <span className="sr-only">Andmete laadimine...</span>
      <div className="h-20 bg-gray-200 rounded w-2/3" aria-hidden="true" />
      <div className="h-96 bg-gray-100 rounded w-full" aria-hidden="true" />
      <div className="h-16 bg-gray-100 rounded w-full" aria-hidden="true" />
    </div>
  );
}
