const mongoose = require("mongoose");
const mongodb = "mongodb://localhost:27017/mernCrud";

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", () => {
  console.log("Connected Successfully.");
});
