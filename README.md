# Portfolio + Blog Platform — Backend

A full-stack backend API for a personal portfolio and blog platform, built with Node.js, Express, and MongoDB. Features role-based authentication, allowing an admin to manage blog content while visitors can read posts and register to comment.

## Features

- **Authentication** — Secure register/login system with JWT tokens
- **Password Security** — Passwords hashed using bcrypt before storage
- **Role-Based Access Control** — Admin-only routes for content management, public routes for reading
- **Blog System** — Full CRUD for blog posts with author references
- **RESTful API Design** — Clean, resource-based routes following REST conventions

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (jsonwebtoken) + bcrypt
- **Other:** dotenv, cors, morgan

## Project Structure

```
portfolio-blog-backend/
  ├── model/          # Mongoose schemas
  ├── controller/      # Business logic
  ├── routes/          # API route definitions
  ├── middleware/       # Auth & role-checking middleware
  ├── database/         # DB connection logic
  └── index.js          # App entry point
```

## API Endpoints

### Auth
| Method | Route | Access |
|--------|-------|--------|
| POST | `/api/auth/register` | Public |
| POST | `/api/auth/login` | Public |

### Posts
| Method | Route | Access |
|--------|-------|--------|
| GET | `/api/posts` | Public |
| GET | `/api/posts/:id` | Public |
| POST | `/api/posts` | Admin only |
| PUT | `/api/posts/:id` | Admin only |
| DELETE | `/api/posts/:id` | Admin only |

## Setup

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file with:
   ```
   DATABASE_URL=your_mongodb_connection_string
   PORT=8000
   JWT_SECRET=your_secret_key
   ```
4. Run `npm start`

## Author

Ali — Backend Developer in training, building this as a portfolio project.

## Status

🚧 Work in progress — more features (comments, projects showcase, contact form) coming soon.
