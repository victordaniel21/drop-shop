package handlers

import (
	"encoding/json"
	"net/http"
)

// APIError is our standard error structure sent to the frontend
type APIError struct {
	Error string `json:"error"`
}

// WriteJSON is a helper to consistently send JSON responses
func WriteJSON(w http.ResponseWriter, status int, data any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(data)
}

// WriteError is a helper to consistently send JSON error messages
func WriteError(w http.ResponseWriter, status int, message string) {
	WriteJSON(w, status, APIError{Error: message})
}
