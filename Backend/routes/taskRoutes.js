const express = require("express");
const router = express.Router();

const {
    getTasks,
    addTask
} = require("../controllers/taskController"); 

//Get route to return all tasks
router.get("/", getTasks);

//POST route to add a new tasks
router.post("/", addTask);

module.exports = router;
