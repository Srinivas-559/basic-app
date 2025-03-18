const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

// Route that asks for a username and greets the user
app.get("/", (req, res) => {
    const { name } = req.query; // Get name from query parameter
    if (name) {
        res.send(`Hello, ${name} welcome to the backend ..`);
    } else {
        res.send("Hello! Please provide your name in the query parameter like this: /?name=YourName");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
