const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const app = express();
dotenv.config();

app.use(express.json());

mongoose.connect(
  process.env.MONGO_URL, {
    //  We don't require these now!
    })
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err)
);

app.use("/api/auth", authRoute)

app.listen("5000", () => {
  console.log(`Server listening on port 5000`);
});