import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full border-b border-(--border-light) bg-transparent py-4">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Brand */}
        <Link href="/" className="text-xl font-serif tracking-tight font-semibold text-foreground">
          Drop&Shop.
        </Link>
        
        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium text-muted">
          <Link href="/products" className="hover:text-foreground transition-colors">Browse</Link>
          <Link href="/dashboard" className="hover:text-foreground transition-colors">Vendor Dashboard</Link>
          <button className="bg-sage text-white px-4 py-1.5 rounded-sm hover:opacity-90 transition-opacity">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
}