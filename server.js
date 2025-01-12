const express = require("express");

//const db = require("./db");

const port = process.env.PORT || 3000;

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
    res.send("Hello, Node.js!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});