// src/app/products/error.tsx
'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // In production, you would log this to Sentry or Datadog
    console.error("Products page crashed:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-4">
      <h2 className="text-2xl font-serif text-foreground">Something went wrong!</h2>
      <p className="text-muted text-center max-w-md">
        We couldn't load the products. The marketplace might be taking a quick nap.
      </p>
      <button
        onClick={() => reset()} // Attempts to re-render the segment
        className="bg-terra text-white px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity"
      >
        Try Again
      </button>
    </div>
  );
}