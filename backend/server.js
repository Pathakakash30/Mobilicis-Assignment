const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
var cors = require("cors");

const connectDB = require("./config/db");
const allRoutes = require("./Routes/allRoutes");

dotenv.config();
connectDB();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", allRoutes);

// serving frontend
const dirname = path.resolve();
app.use("/uploads", express.static(path.join(dirname, "/uploads")));


//serving the frontend

  app.use(express.static(path.join(dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(dirname, "frontend", "build", "index.html"))
  );


const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
