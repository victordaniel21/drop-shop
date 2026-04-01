import { getProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';

// This is a React Server Component (RSC). 
// It executes securely on your Node.js server BEFORE sending HTML to the browser.
export default async function ProductsPage() {
  // 1. Fetch the data directly from our running Go backend
  // If the backend is empty, we default to an empty array to prevent crashes
  const products = await getProducts().catch(() => []);

  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-primary) p-8 md:p-16 font-sans">
      
      <header className="mb-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-light tracking-tight mb-2">
          Curated Essentials
        </h1>
        <p className="text-(--text-secondary) text-lg font-light">
          Simplicity and performance, delivered.
        </p>
      </header>

      {/* The Japandi Grid System */}
      <main className="max-w-5xl mx-auto">
        {products.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-(--border-light) rounded-lg">
            <p className="text-(--text-secondary)">No products found in the database.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

    </div>
  );
}