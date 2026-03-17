package router

import (
	"drop-shop/internal/api/handlers" // Adjust this if your module name is different
	"net/http"
)

// Setup creates and configures the routing multiplexer
func Setup() *http.ServeMux {
	mux := http.NewServeMux()

	// Go 1.22 introduced method-based routing in the standard library!
	mux.HandleFunc("GET /api/health", handlers.HealthCheck)

	// Placeholder for tomorrow's work
	// mux.HandleFunc("GET /api/products", handlers.ListProducts)
	// mux.HandleFunc("POST /api/products", handlers.CreateProduct)

	return mux
}
