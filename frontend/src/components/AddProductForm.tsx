'use client'; // CRITICAL: This tells Next.js this component runs in the browser

import { useState } from 'react';

export default function AddProductForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '', // Stored as string in the input for decimals (e.g., "19.99")
    stockCount: 1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // 1. Convert the string price (e.g., "19.99") to integer cents (1999) for our Go backend
      const priceInCents = Math.round(parseFloat(formData.price) * 100);

      // 2. Prepare the payload (mocking storeId for now until we build Auth on Day 7/8)
      const payload = {
        storeId: "00000000-0000-0000-0000-000000000000", // We will replace this later!
        title: formData.title,
        description: formData.description,
        price: priceInCents,
        stockCount: Number(formData.stockCount),
      };

      // 3. Send to Go Backend
      const res = await fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Failed to create product');

      setSuccess('Product created successfully!');
      setFormData({ title: '', description: '', price: '', stockCount: 1 }); // Reset form
      
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="japandi-card max-w-lg mx-auto space-y-4">
      <h2 className="text-xl font-serif text-foreground mb-4">Add New Product</h2>
      
      {error && <div className="text-terra text-sm bg-terra/10 p-3 rounded-sm">{error}</div>}
      {success && <div className="text-sage text-sm bg-sage/10 p-3 rounded-sm">{success}</div>}

      <div>
        <label className="block text-sm font-medium text-muted mb-1">Title</label>
        <input 
          type="text" 
          required 
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          className="w-full border border-(--border-light) p-2 rounded-sm focus:outline-none focus:border-sage bg-transparent"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-muted mb-1">Description</label>
        <textarea 
          required 
          rows={3}
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          className="w-full border border-(--border-light) p-2 rounded-sm focus:outline-none focus:border-sage bg-transparent"
        />
      </div>

      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-muted mb-1">Price ($)</label>
          <input 
            type="number" 
            step="0.01" 
            min="0.01"
            required 
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
            className="w-full border border-(--border-light) p-2 rounded-sm focus:outline-none focus:border-sage bg-transparent"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium text-muted mb-1">Initial Stock</label>
          <input 
            type="number" 
            min="1"
            required 
            value={formData.stockCount}
            onChange={(e) => setFormData({...formData, stockCount: parseInt(e.target.value)})}
            className="w-full border border-(--border-light) p-2 rounded-sm focus:outline-none focus:border-sage bg-transparent"
          />
        </div>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-sage text-white py-2 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50 mt-4 font-medium"
      >
        {loading ? 'Creating...' : 'Publish Product'}
      </button>
    </form>
  );
}