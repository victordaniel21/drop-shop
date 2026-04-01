import AddProductForm from "@/components/AddProductForm";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-serif text-foreground">Vendor Dashboard</h1>
        <p className="text-muted mt-2">Manage your inventory and storefront.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: The Form */}
        <div className="lg:col-span-1">
          <AddProductForm />
        </div>

        {/* Right Column: Placeholder for future Analytics or Product List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-serif text-foreground">Recent Activity</h2>
          <div className="japandi-card h-64 flex items-center justify-center text-muted border-dashed">
            Your recent sales and product analytics will appear here.
          </div>
        </div>
      </div>
    </div>
  );
}