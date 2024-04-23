const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 5000;

connectDB();

const app = express();

// Authorisation CORS
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        optionsSuccessStatus: 200,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/post", require("./routes/post.routes"));

app.listen(port, () => console.log("Le server à démarré au port " + port));
