/*package repository

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq" // The underscore means we import it for its side-effects (registering the driver)
)

// OpenDB connects to PostgreSQL and pings it to ensure the connection is alive
func OpenDB() (*sql.DB, error) {
	// In production, this string comes from an environment variable!
	dsn := "host=localhost port=5432 user=postgres password=password dbname=dropshop sslmode=disable"

	db, err := sql.Open("postgres", dsn)
	if err != nil {
		return nil, err
	}

	// sql.Open just validates the arguments, Ping actually connects to the database
	err = db.Ping()
	if err != nil {
		return nil, err
	}

	fmt.Println("Successfully connected to PostgreSQL!")
	return db, nil
}
*/

package repository

import (
	"database/sql"
	"fmt"
	"os" // Import the OS package

	_ "github.com/lib/pq"
)

func OpenDB() (*sql.DB, error) {
	// Read from the environment, fall back to a default if it's missing
	dsn := os.Getenv("DB_DSN")
	if dsn == "" {
		// Only fallback for local development!
		dsn = "host=localhost port=5432 user=postgres password=password dbname=dropshop sslmode=disable"
	}

	db, err := sql.Open("postgres", dsn)
	if err != nil {
		return nil, err
	}

	err = db.Ping()
	if err != nil {
		return nil, err
	}

	fmt.Println("Successfully connected to PostgreSQL!")
	return db, nil
}
