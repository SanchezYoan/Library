const mongoose = require("mongoose");
require('dotenv').config({ path: "../../.env" });

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => console.log("Mongo connected"));
  } catch (err) {
    console.log("Failed to connect:", err);
    process.exit();
  }
};

module.exports = connectDB;
