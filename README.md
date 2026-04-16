# Drop&Shop 🛍️

A highly performant, multi-vendor marketplace platform built with a modern Fullstack architecture.

## 🚀 Tech Stack
* **Backend:** Go 1.22 (Standard Library Routing), PostgreSQL
* **Frontend:** Next.js 14 (App Router), React Server Components, Tailwind CSS v4
* **Infrastructure:** Docker

## 🧠 Architectural Decisions
* **Clean Architecture in Go:** Separated Handlers, Services, and Repositories to ensure the business logic is fully decoupled from the HTTP transport layer.
* **Financial Data Integrity:** All currency is strictly handled as `int64` (cents) in the backend to prevent IEEE 754 floating-point math errors, localized on the client side via the `Intl` API.
* **React Server Components:** Leveraged Next.js Server Components to fetch product data at the server edge, achieving zero-bundle-size rendering and eliminating client-side waterfall latency.
* **Optimized Queries:** Replaced `SELECT *` with explicit column mapping to safeguard against future schema mutations and silent panics.
