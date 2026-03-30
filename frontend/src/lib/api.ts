// src/lib/api.ts

const API_BASE_URL = 'http://localhost:8080/api';

// Define the TypeScript interface so we get autocomplete for our Product
export interface Product {
  id: string;
  storeId: string;
  title: string;
  description: string;
  price: number; // Remember: This is in cents!
  stockCount: number;
}

export async function getProducts(): Promise<Product[]> {
  // In Next.js App Router, fetch is automatically cached.
  // We add 'no-store' here to ensure we always see the freshest products during dev.
  const res = await fetch(`${API_BASE_URL}/products`, { cache: 'no-store' });

  if (!res.ok) {
    // This will trigger the nearest error.tsx boundary in Next.js
    throw new Error('Failed to fetch products');
  }

  return res.json();
}