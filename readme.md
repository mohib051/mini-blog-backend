# Mini Blog Backend

A simple Express.js and MongoDB backend for a mini blog application.

## Features

- RESTful API for blog posts (CRUD)
- MongoDB database integration via Mongoose
- Environment-based configuration
- CORS and body parsing middleware

## Folder Structure

```
.env
.gitignore
package.json
server.js
src/
  app.js
  config/
    config.js
  controllers/
    admin.controller.js
  db/
    db.js
  model/
    post.model.js
  routes/
    admin.routes.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) database (local or Atlas)

### Installation

1. **Clone the repository**

   ```sh
   git clone <your-repo-url>
   cd mini-blog-backend
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory and add:

   ```
   PORT=8080
   DB_URL=<your-mongodb-connection-string>
   ```

   Replace `<your-mongodb-connection-string>` with your MongoDB URI.

### Running the Server

```sh
node server.js
```

The server will start on the port specified in your `.env` file (default: 8080).

## API Endpoints

All endpoints are prefixed with `/admin`.

- `GET /admin/` — Welcome message
- `GET /admin/posts` — Get all posts
- `GET /admin/posts/:id` — Get a single post by ID
- `POST /admin/posts` — Create a new post
- `PUT /admin/posts/:id` — Update a post by ID
- `DELETE /admin/posts/:id` — Delete a post by ID

