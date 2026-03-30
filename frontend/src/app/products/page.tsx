import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-6">
      <h1 className="text-5xl font-serif font-medium text-foreground max-w-2xl leading-tight">
        Curated goods from independent creators.
      </h1>
      <p className="text-lg text-muted max-w-md">
        Discover minimalist, high-quality products from vendors around the world.
      </p>
      <div className="flex gap-4 pt-4">
        <Link href="/products" className="bg-sage text-white px-6 py-3 rounded-sm font-medium hover:opacity-90 transition-opacity">
          Shop the Collection
        </Link>
        <Link href="/dashboard" className="bg-transparent border border-foreground text-foreground px-6 py-3 rounded-sm font-medium hover:bg-foreground hover:text-white transition-colors">
          Become a Vendor
        </Link>
      </div>
    </div>
  );
}