const express = require("express");
const router = express.Router();

const User = require("../models/User");

// Register
router.post("/register", async (req, res) => {
  try {

    const user = new User(req.body);

    await user.save();

    res.json({
      message: "Registration Successful"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// Login
router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email,
      password
    });

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email or Password"
      });
    }

    res.json({
      message: "Login Successful",
      user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;