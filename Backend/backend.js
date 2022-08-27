const express = require("express");
const route = require("./routes/appRoutes");

require("./db/config"); // Configuration of db

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(route);
var cors = require("cors");
app.use(cors());

//Creating the port to tun the server on.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server operating at port ${port}.`);
});
