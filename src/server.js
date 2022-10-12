const mongoose = require("mongoose");
const express = require("express");
const app = express();
const uri =
  "mongodb+srv://Krisztian:Krisztian@classiccars.vahb5ef.mongodb.net/?retryWrites=true&w=majority";
const port = 8000;

mongoose.connect(uri, () => {
  try {
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
});
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});
