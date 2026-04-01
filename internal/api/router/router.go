package router

import (
	"drop-shop/internal/api/handlers"
	"net/http"
)

// Simple middleware to add CORS headers
func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

		// Handle preflight requests
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func Setup() http.Handler { // Note: changed return type to http.Handler
	mux := http.NewServeMux()

	mux.HandleFunc("GET /api/health", handlers.HealthCheck)
	// You should have this from Day 3/4 if you wired up your product handlers!
	// mux.HandleFunc("GET /api/products", handlers.ListProducts)
	// mux.HandleFunc("POST /api/products", handlers.CreateProduct)

	// Wrap the entire mux in our CORS middleware
	return enableCORS(mux)
}
