
const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Welcome! My Node.js server is running successfully.");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
