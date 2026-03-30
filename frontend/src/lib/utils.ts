// src/lib/utils.ts

/**
 * Converts integer cents (e.g., 1550) to a localized currency string ($15.50).
 */
export function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // Always display two decimal places for currency
    minimumFractionDigits: 2,
  }).format(cents / 100);
}