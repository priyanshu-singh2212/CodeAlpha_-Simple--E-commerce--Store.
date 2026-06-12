require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Models
const Order = require("./models/Order");

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// Product Routes
const productRoutes = require("./routes/product");
app.use("/api/products", productRoutes);

// User Routes
const userRoutes = require("./routes/user");
app.use("/api/users", userRoutes);

// Order Route
app.post("/api/order", async (req, res) => {
  try {

    const order = new Order(req.body);

    await order.save();

    res.json({
      message: "Order placed successfully",
      order
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// Home Route (Optional)
app.get("/", (req, res) => {
  res.send("E-Commerce Backend Running");
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on port 5000");
});