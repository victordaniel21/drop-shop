// src/app/products/page.tsx
import { getProducts } from '@/lib/api';
import ProductCard from '@/components/ProductCard';

// Look! The component itself is 'async'
export default async function ProductsPage() {
  // Fetch data directly on the server before sending HTML to the browser
  const products = await getProducts();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-foreground">Curated Goods</h1>
        <p className="text-muted mt-2">Discover unique items from independent vendors.</p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 text-muted border border-dashed border-[var(--border-light)] rounded-sm">
          No products found. Be the first to open a store!
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}