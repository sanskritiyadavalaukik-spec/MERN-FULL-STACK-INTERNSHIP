
const express = require("express");

const app = express();
const PORT = 5000;

app.use(express.json());

app.use((req, res, next) => {
    console.log("MIDDLEWARE IS WORKING!");
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    next();
});

// GET route for the home page
app.get("/", (req, res) => {
    res.json({
        message: "Welcome! My Node.js server is running successfully."
    });
});

// Dummy task list
const tasks = [
    {
        id: 1,
        title: "Learn Node.js",
        status: "completed"
    },
    {
        id: 2,
        title: "Practise Express routing",
        status: "pending"
    },
    {
        id: 3,
        title: "Build basic APIs",
        status: "pending"
    }
];

// GET route to return all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});

//POST route to add a new task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        status: req.body.status
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
