package main

import (
	"drop-shop/internal/api/router"
	"fmt"
	"log"
	"net/http"
)

func main() {
	// 1. Initialize the router
	mux := router.Setup()

	// 2. Configure the server
	server := &http.Server{
		Addr:    ":8080",
		Handler: mux,
	}

	// 3. Start listening for requests
	fmt.Println("Drop&Shop API is running on http://localhost:8080")
	err := server.ListenAndServe()
	if err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
