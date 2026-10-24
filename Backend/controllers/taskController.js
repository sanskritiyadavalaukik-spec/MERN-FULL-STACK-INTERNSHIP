
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

// Get all tasks
const getTasks = (req, res) => {
    res.json(tasks);
};

// Add a new task
const addTask = (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        status: req.body.status
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
};

module.exports = {
    getTasks,
    addTask
};
