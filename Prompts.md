# AI Prompt Log — Data Hub MongoDB

This document records the use of AI assistance during the development of the Data Hub REST API project with MongoDB Atlas.



## Prompt 1 — MongoDB Atlas Setup

**Purpose:** Understand how to provision a MongoDB Atlas database for the project.

**Prompt:**

> Explain how to create a free MongoDB Atlas cluster and connect it to my existing Node.js Express project.

**Use:** Understanding cloud database provisioning and MongoDB Atlas configuration.

---

## Prompt 2 — Mongoose Installation and Setup

**Purpose:** Understand how to use Mongoose as an ODM.

**Prompt:**

> Explain how to install Mongoose and connect my Express server to MongoDB Atlas using a Mongoose connection.

**Use:** Understanding ODM setup and database connection.

---

## Prompt 3 — Environment Variables

**Purpose:** Understand how to securely store the MongoDB connection string.

**Prompt:**

> Explain how to store my MongoDB Atlas connection string in a .env file and load it into my Node.js Express application.

**Use:** Understanding environment variables and keeping database credentials out of source code.

---

## Prompt 4 — MongoDB Connection Debugging

**Purpose:** Debug the MongoDB Atlas DNS/SRV connection error.

**Prompt:**

> My MongoDB Atlas connection is giving a DNS/SRV error. Explain what the error means and how I can troubleshoot the connection.

**Use:** Troubleshooting DNS resolution and MongoDB Atlas connectivity.

---

## Prompt 5 — Post Mongoose Schema

**Purpose:** Understand how to create a strict Mongoose schema for posts.

**Prompt:**

> Explain how to create a Mongoose Post schema with title as String, content as String, and createdAt as Date, including required fields and a default date.

**Use:** Understanding Mongoose schemas, data types, validation, and defaults.

---

## Prompt 6 — MongoDB CRUD

**Purpose:** Replace the old in-memory array with MongoDB operations.

**Prompt:**

> Explain how to replace my in-memory blog post array with MongoDB using Mongoose and implement POST, GET, PUT, and DELETE operations.

**Use:** Understanding database-backed CRUD operations.

---

## Prompt 7 — Mongoose CRUD Debugging

**Purpose:** Understand Mongoose methods used for CRUD operations.

**Prompt:**

> Explain how Post.create(), Post.find(), Post.findByIdAndUpdate(), and Post.findByIdAndDelete() work in Mongoose and when each method should be used.

**Use:** Understanding MongoDB CRUD methods through Mongoose.

---

## Prompt 8 — User Schema and Relationship

**Purpose:** Understand how to create a relationship between users and posts.

**Prompt:**

> Explain how to create a User Mongoose schema and connect a Post document to a User using authorId and an ObjectId reference.

**Use:** Understanding MongoDB document relationships and Mongoose references.

---

## Prompt 9 — Mongoose Populate

**Purpose:** Understand how to retrieve author information along with a post.

**Prompt:**

> Explain how Mongoose populate() works and how I can populate authorId in my posts to return the related user information.

**Use:** Understanding referenced documents and data hydration with Mongoose.

---

## Prompt 10 — Recent Posts

**Purpose:** Implement the advanced recent-posts requirement.

**Prompt:**

> Explain how to create a route that returns the three most recent posts using Mongoose sort() and limit(), and make sure it does not conflict with the /posts/:id route.

**Use:** Implementing sorting, limiting, and route ordering.

---

## Prompt 11 — API Testing

**Purpose:** Understand how to verify the MongoDB-backed API.

**Prompt:**

> Explain how to test my MongoDB CRUD API, user creation, author relationship, populate functionality, and recent posts endpoint using Postman.

**Use:** API quality assurance and database verification.

---

## Prompt 12 — Git and GitHub

**Purpose:** Understand how to push the completed sprint project to a new repository.

**Prompt:**

> Explain how to create a new GitHub repository, change the existing Git remote, and push my completed project to the new repository.

**Use:** Repository management and version control.

---

## Development Notes

AI assistance was used as a development support tool for **learning, debugging, troubleshooting, and understanding implementation decisions**.

The project was independently run and tested in the local development environment.

Testing included:

* POST `/posts`
* GET `/posts`
* GET `/posts/:id`
* PUT `/posts/:id`
* DELETE `/posts/:id`
* POST `/users`
* MongoDB User–Post relationship
* Mongoose `.populate()`
* GET `/posts/recent`
* Invalid request scenarios
* MongoDB Atlas connection
* API responses using Postman

The API was verified locally with MongoDB Atlas before the final GitHub submission.
