// src/components/ProductCard.tsx
import { Product } from '@/lib/api';
import { formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="japandi-card flex flex-col h-full group">
      {/* Placeholder for an image - using an elegant grey box for now */}
      <div className="w-full h-64 bg-[var(--border-light)] mb-4 rounded-sm overflow-hidden relative">
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-serif font-medium text-foreground">
          {product.title}
        </h3>
        <p className="text-sm text-muted mt-1 line-clamp-2">
          {product.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="font-medium text-foreground">
          {formatCurrency(product.price)}
        </span>
        <button className="text-sm text-sage hover:text-foreground transition-colors font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
}