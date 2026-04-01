package handlers

import (
	"encoding/json"
	"net/http"
)

// HealthCheck responds with a 200 OK and a simple JSON status.
func HealthCheck(w http.ResponseWriter, r *http.Request) {
	// 1. Tell the client we are sending JSON back
	w.Header().Set("Content-Type", "application/json")

	// 2. Set the HTTP status code (200 OK)
	w.WriteHeader(http.StatusOK)

	// 3. Create the data we want to send
	response := map[string]string{
		"status":  "healthy",
		"message": "Drop&Shop API is running",
	}

	// 4. Encode the Go map into JSON and send it through the ResponseWriter
	json.NewEncoder(w).Encode(response)
}
