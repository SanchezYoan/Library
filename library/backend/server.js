require('dotenv').config({ path: "../.env" });
const mongoose = require('mongoose');
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const bodyParser = require("body-parser")
const port = 5000;

// connection to DataBase
connectDB();

const app = express();

// Authorisation CORS
app.use(cors())
// app.use(
//     cors({
//         origin: "http://localhost:3000",
//         credentials: true,
//         optionsSuccessStatus: 200,
//     })
// );


// app.use(express.json());
app.use(bodyParser.json())
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", require("./routes/book.routes"));

// Lancer le server
app.listen(port || 5000, () => console.log("Le server à démarré au port " + port));
