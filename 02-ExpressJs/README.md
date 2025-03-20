# Express.js Guide

## Introduction to Express.js

Express.js is a fast, unopinionated, and minimalist web framework for Node.js. It provides a robust set of features to develop web and mobile applications. With Express.js, you can build single-page, multi-page, and hybrid web applications with ease.

### Why Use Express.js?
- **Lightweight and Fast**: Minimal overhead for building web applications.
- **Middleware Support**: Easily handle requests, responses, and other application logic.
- **Routing**: Powerful and flexible routing system.
- **Scalability**: Ideal for building scalable and maintainable applications.
- **Community Support**: A large ecosystem of plugins and tools.

---

## Setting Up a Basic Express Application

### Prerequisites
- Node.js installed on your system.
- Basic knowledge of JavaScript.

### Steps to Set Up
1. **Initialize a New Project**:
     ```bash
     mkdir express-app
     cd express-app
     npm init -y
     ```

2. **Install Express**:
     ```bash
     npm install express
     ```

3. **Create the Application File**:
     Create a file named `app.js`:
     ```javascript
     const express = require('express');
     const app = express();
     const PORT = 3000;

     app.get('/', (req, res) => {
           res.send('Hello, World!');
     });

     app.listen(PORT, () => {
           console.log(`Server is running on http://localhost:${PORT}`);
     });
     ```

4. **Run the Application**:
     ```bash
     node app.js
     ```
     Open your browser and navigate to `http://localhost:3000`.

---

## Routing in Express.js

Routing defines how an application responds to client requests for specific endpoints.

### Example of Basic Routing
```javascript
app.get('/about', (req, res) => {
      res.send('About Page');
});

app.post('/submit', (req, res) => {
      res.send('Form Submitted');
});
```

### Route Parameters
```javascript
app.get('/user/:id', (req, res) => {
      const userId = req.params.id;
      res.send(`User ID: ${userId}`);
});
```

---

## Middleware in Express.js

Middleware functions are functions that execute during the request-response cycle.

### Types of Middleware
1. **Application-Level Middleware**:
     ```javascript
     app.use((req, res, next) => {
           console.log('Request URL:', req.url);
           next();
     });
     ```

2. **Router-Level Middleware**:
     ```javascript
     const router = express.Router();
     router.use((req, res, next) => {
           console.log('Router Middleware');
           next();
     });
     ```

3. **Built-in Middleware**:
     ```javascript
     app.use(express.json());
     app.use(express.urlencoded({ extended: true }));
     ```

4. **Third-Party Middleware**:
     Example: `morgan` for logging.
     ```bash
     npm install morgan
     ```
     ```javascript
     const morgan = require('morgan');
     app.use(morgan('dev'));
     ```

---

## Request and Response Handling

### Accessing Request Data
- **Query Parameters**:
     ```javascript
     app.get('/search', (req, res) => {
           const query = req.query.q;
           res.send(`Search Query: ${query}`);
     });
     ```

- **Request Body**:
     ```javascript
     app.post('/data', (req, res) => {
           const data = req.body;
           res.send(data);
     });
     ```

### Sending Responses
- **Plain Text**:
     ```javascript
     res.send('Hello, World!');
     ```

- **JSON**:
     ```javascript
     res.json({ message: 'Hello, World!' });
     ```

- **Status Codes**:
     ```javascript
     res.status(404).send('Not Found');
     ```

---

## Error Handling in Express.js

Express provides a simple mechanism for handling errors.

### Example of Error Handling Middleware
```javascript
app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something went wrong!');
});
```

### Throwing Errors
```javascript
app.get('/error', (req, res) => {
      throw new Error('This is an intentional error.');
});
```

---

## Conclusion

Express.js is a powerful and flexible framework for building web applications. By understanding its core concepts like routing, middleware, request/response handling, and error handling, you can create robust and scalable applications. Start experimenting and explore the vast ecosystem of Express.js to enhance your development experience!