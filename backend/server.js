const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const recipeRoutes = require("./routes/recipes");
const { mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
const mongoURL =
  "mongodb+srv://aungkyawswartun:test1234@recipes-cluster.fwbmrdn.mongodb.net/?retryWrites=true&w=majority&appName=Recipes-Cluster";
mongoose.connect(mongoURL).then(() => {
  console.log("connected to db");
  app.listen(process.env.PORT, () => {
    console.log("app is running on port : " + process.env.PORT);
  });
});
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

app.use("/api/recipes", recipeRoutes);
