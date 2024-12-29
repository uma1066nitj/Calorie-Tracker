const express = require("express");
const jwt = require("jsonwebtoken");
const { FoodEntry } = require("../models");

const router = express.Router();

// Middleware to verify token
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "Unauthorized! Token missing." });

  jwt.verify(token, "secret", (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token!" });
    req.userId = decoded.id;
    next();
  });
};

// Add a new food entry
router.post("/add", authenticate, async (req, res) => {
  const { date, food, quantity, calories } = req.body;

  // Validate input fields
  if (!date || !food || !quantity || !calories) {
    return res.status(400).json({
      message: "All fields (date, food, quantity, calories) are required!",
    });
  }

  try {
    const entry = await FoodEntry.create({
      userId: req.userId,
      date,
      food,
      quantity,
      calories,
    });
    console.log(entry);
    res.status(201).json(entry);
  } catch (error) {
    console.error("Error adding food entry:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while adding the entry." });
  }

  console.log("Request body:", req.body);
  console.log("User ID:", req.userId);
});

// List food entries
router.get("/list", authenticate, async (req, res) => {
  try {
    const entries = await FoodEntry.findAll({
      where: { userId: req.userId },
      order: [["date", "DESC"]],
    });

    if (entries.length === 0) {
      return res.status(404).json({ message: "No food entries found." });
    }

    res.json(entries);
  } catch (error) {
    console.error("Error fetching food entries:", error.message);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the entries." });
  }
});

module.exports = router;
