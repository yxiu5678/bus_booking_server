const express = require("express");

//const db = require("./db");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello, Node.js!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// use node server.js to run server
// use node sync-to-glitch.js to sync in glitch after push to github