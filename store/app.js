require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const connectDB = require("./db/connect");
connectDB();
const productsRouter = require("./routes/products");

const notFoundMiddleWare = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middle
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Products Route</a>");
});

app.use("/api/v1/products", productsRouter);

// products route

app.use(notFoundMiddleWare);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log("Listening on port:", PORT);
});
