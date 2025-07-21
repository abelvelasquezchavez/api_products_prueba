API Product CRUD with TypeScript, Express, and MySQL

## Getting Started

To get started, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/abelvelasquezchavez/api_products_prueba.git
```

2. Install the dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following content:

```bash
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=backend_b89
JWT_SECRET=miclavesecreta
```

4. Run the application:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:3000/api/products`.

## Endpoints

### GET /api/products

This endpoint retrieves all products from the database.

### GET /api/products/:id

This endpoint retrieves a specific product by its ID.

### POST /api/products

This endpoint creates a new product in the database.

### PUT /api/products/:id

This endpoint updates a specific product by its ID.

### DELETE /api/products/:id

This endpoint deletes a specific product by its ID.

## Database

The application uses MySQL as the database. You can create a new database and a new table with the following SQL commands:

```sql
CREATE DATABASE backend_b89;
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

