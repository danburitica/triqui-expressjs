const express = require("express");
const mongoose = require("mongoose");
const gameRoutes = require("./routes/game");
require("dotenv").config();
const { PORT, MONGO_URI } = process.env;

const app = express();

// Middleware
app.use(express.json());
app.use("/api", gameRoutes);

// Database connection
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Database connected"))
  .catch((e) => console.error(e));

// Api init
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
