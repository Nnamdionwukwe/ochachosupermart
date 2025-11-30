import express from "express";
const mongoose = "mongoose";
import axios from "axios";
const cors = "cors";

const app = express();
const PORT = 7000;

// Middleware
app.use(axios()); // Allows your React app (e.g., http://localhost:3000) to make requests
app.use(express.json()); // Parses incoming JSON data

// Built-in middleware to serve static files (CSS, JS, images) from a 'public' directory
app.use(express.static("public"));

// MongoDB Connection
const DB_URI = "mongodb://localhost:27017/myUserDB"; // Replace with your MongoDB URI

mongoose
  .connect(DB_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Mongoose Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  dateCreated: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);

// API Route to handle form submission
app.post("/api/users", async (req, res) => {
  try {
    const newUser = new User(req.body); // Create a new Mongoose document from React data
    const savedUser = await newUser.save(); // Save the document to MongoDB

    res.status(201).json(savedUser); // Send back the saved user object (including its MongoDB _id)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () =>
  console.log(`Backend server running on http://localhost:${PORT}`)
);
