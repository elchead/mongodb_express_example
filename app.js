require("dotenv/config");
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const postRoutes = require("./routes/posts");
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("We are on home");
});

const mongoose = require("mongoose");
const use_local = true;
const url = mongoose.connect(
  use_local ? "mongodb://localhost/" : process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(3000, (err) => {
  console.log("Listening to port 3000");
});
