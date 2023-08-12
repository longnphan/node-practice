const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const port = 3000;
require("dotenv").config();
const connectDB = require("./db/connect");
connectDB();

// middleware
app.use(express.static("./public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("all items");
});

app.use("/api/v1/tasks", tasks);

app.listen(port, () => {
  console.log("Listening on port:", port);
});
