
const express = require("express");

const app = express();
const PORT = 5000;

// Import task routes
const taskRoutes = require("./routes/taskRoutes");

// Middleware to parse JSON
app.use(express.json());

// Custom middleware to log requests
app.use((req, res, next) => {
    console.log("MIDDLEWARE IS WORKING!");
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    next();
});

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome! My Node.js server is running successfully."
    });
});

// Use task routes
app.use("/tasks", taskRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

