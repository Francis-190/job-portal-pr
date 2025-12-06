const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample subscription plans
const plans = [
  { id: 1, name: "Basic", price: 0, features: ["View jobs", "Basic filters"] },
  { id: 2, name: "Pro", price: 9.99, features: ["Save jobs", "Email alerts"] },
  { id: 3, name: "Premium", price: 19.99, features: ["HR contact", "Highlighted profile"] }
];

// GET all plans
app.get("/api/plans", (req, res) => {
  res.json(plans);
});

// User selects a plan
app.post("/api/subscribe", (req, res) => {
  const { userId, planId } = req.body;
  res.json({ message: `User ${userId} subscribed to plan ${planId}` });
});

app.listen(5000, () => console.log("Backend running on port 5000"));
