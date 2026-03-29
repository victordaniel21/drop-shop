package repository

import (
	"database/sql"
	"errors"
)

// Product models our entity for both the Database and the JSON API.
// "Simplicity over Complexity" - one struct to rule them all.
type Product struct {
	ID          string `json:"id" db:"id"`
	StoreID     string `json:"storeId" db:"store_id"`
	Title       string `json:"title" db:"title"`
	Description string `json:"description" db:"description"`
	Price       int64  `json:"price" db:"price"` // CRITICAL: Stored in cents (e.g., $15.50 = 1550)
	StockCount  int    `json:"stockCount" db:"stock_count"`
}

type ProductRepo struct {
	DB *sql.DB
}

// GetByID retrieves a single product, handling the "Not Found" case cleanly.
func (r *ProductRepo) GetByID(id string) (*Product, error) {
	// We explicitly name our columns instead of using SELECT *.
	// This prevents panic-inducing bugs if the database schema changes later.
	query := `
		SELECT id, store_id, title, description, price, stock_count
		FROM products
		WHERE id = $1`

	var p Product

	// QueryRow automatically checks the connection out of the pool and
	// releases it the moment .Scan() completes.
	err := r.DB.QueryRow(query, id).Scan(
		&p.ID,
		&p.StoreID,
		&p.Title,
		&p.Description,
		&p.Price,
		&p.StockCount,
	)

	if err != nil {
		// sql.ErrNoRows is a normal operational state, not a system failure.
		// We catch it explicitly so our HTTP handlers know to return a 404, not a 500.
		if errors.Is(err, sql.ErrNoRows) {
			return nil, errors.New("product not found")
		}
		return nil, err // Catch-all for actual connection or syntax errors
	}

	return &p, nil
}
