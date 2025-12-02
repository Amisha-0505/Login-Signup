const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const morgan = require("morgan");
const userRouter = require("./route/userRouter");
const cors = require("cors");

const app = express();

dotenv.config({ path: ".env" });

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.db)
  .then(() => {
    console.log("db connected successfully");
  })
  .catch((err) => {
    console.log("err " + err);
  });

// Routes
app.use("/", userRouter);

// PORT CONFIG (IMPORTANT FOR RENDER)
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Your server is running at port ${port}`);
});
