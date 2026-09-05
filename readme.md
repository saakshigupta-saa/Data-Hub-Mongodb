# The Data Hub API

A RESTful API built with **Node.js, Express.js, MongoDB, and Mongoose** for managing blog posts and users.

The project demonstrates how to move from temporary in-memory data storage to a persistent **MongoDB Atlas** database using Mongoose ODM.

## 🚀 Features

* RESTful API architecture
* MongoDB Atlas cloud database
* Mongoose ODM
* CRUD operations for posts
* User creation
* Post and User relationship using `authorId`
* `.populate()` for author details
* Top 3 most recent posts endpoint
* Request logging middleware
* Environment variables for secure database configuration
* JSON request and response handling

## 🛠️ Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB Atlas**
* **Mongoose**
* **dotenv**
* **Postman** for API testing

## 📁 Project Structure

```text
data-hub/
│
├── data/
│   └── posts.js
│
├── middleware/
│   └── logger.js
│
├── models/
│   ├── Post.js
│   └── User.js
│
├── routes/
│   ├── authRoutes.js
│   ├── postRoutes.js
│   └── userRoutes.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── Prompts.md
└── server.js
```

## ⚙️ Installation

Clone the repository and move into the project directory:

```bash
git clone <your-repository-url>
cd data-hub
```

Install dependencies:

```bash
npm install
```

## 🔐 Environment Variables

Create a `.env` file in the project root:

```env
MONGODB_URI=your_mongodb_connection_string
```

Never commit the `.env` file to GitHub.

## ▶️ Run the Server

Start the server using:

```bash
node server.js
```

The API runs locally on:

```text
http://localhost:5000
```

## 📌 API Endpoints

### Posts

| Method | Endpoint        | Description                 |
| ------ | --------------- | --------------------------- |
| GET    | `/posts`        | Get all posts               |
| GET    | `/posts/:id`    | Get a post by ID            |
| POST   | `/posts`        | Create a new post           |
| PUT    | `/posts/:id`    | Update a post               |
| DELETE | `/posts/:id`    | Delete a post               |
| GET    | `/posts/recent` | Get top 3 most recent posts |

### Users

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| POST   | `/users` | Create a new user |

### Authentication

| Method | Endpoint | Description    |
| ------ | -------- | -------------- |
| POST   | `/login` | Login endpoint |

## 📝 Create a Post

Example request:

```json
{
  "title": "MongoDB Post",
  "content": "This post is stored in MongoDB Atlas.",
  "authorId": "USER_ID"
}
```

## 👤 Create a User

Example request:

```json
{
  "name": "Sakshi Gupta",
  "email": "sakshi@example.com"
}
```

## 🔗 Post-User Relationship

Each post contains an `authorId` that references a User document.

Mongoose `.populate()` is used to return the author's details along with the post.

Example response structure:

```json
{
  "title": "Post With Author",
  "content": "This post is connected to a user.",
  "authorId": {
    "_id": "USER_ID",
    "name": "Sakshi Gupta",
    "email": "sakshi@example.com"
  }
}
```

## 🕒 Recent Posts

The following endpoint returns the three most recently created posts:

```text
GET /posts/recent
```

Posts are sorted using `createdAt` in descending order.

## 🧪 API Testing

The API can be tested using **Postman**.

Tested operations include:

* Creating users
* Creating posts
* Reading posts
* Updating posts
* Deleting posts
* Populating author information
* Fetching recent posts

## 🔒 Security

* MongoDB credentials are stored in `.env`.
* `.env` is excluded from Git using `.gitignore`.
* Database credentials should never be committed to the repository.

## 📚 Learning Objectives

This project focuses on:

1. MongoDB Atlas cloud database provisioning
2. Mongoose ODM
3. Schema design
4. Persistent CRUD operations
5. Referencing documents using ObjectId
6. Mongoose `.populate()`
7. Sorting and limiting MongoDB query results
8. API testing with Postman

## 👩‍💻 Author

**Sakshi Gupta**
