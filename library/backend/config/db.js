const mongoose = require("mongoose");
require('dotenv').config({ path: "../../.env" });

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose
      .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("Mongo connected"));
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
