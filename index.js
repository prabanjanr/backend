const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products",productRoute);


app.listen(3000, () => {
  console.log("Server is running on 3000");
});

app.get("/", (req, res) => {
  res.send("Hello from Node Api server");
});


mongoose
  .connect(
    "mongodb+srv://prabanjan:prabanjan2002@prabanjancluster.lmicqzd.mongodb.net/?retryWrites=true&w=majority&appName=prabanjancluster"
  )
  .then(() => {
    console.log("Connected mongodb");
  });
