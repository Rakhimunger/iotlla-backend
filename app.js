const express = require("express");
const connectDB = require("./Config/db");
const UserFormData = require("./Controllers/UserController");
const app = express();
const cors = require("cors");

// Connect to DB
connectDB();
app.use(cors());
// Middleware to parse JSON from body
app.use(express.json());

// Direct POST route using controller
app.post("/api/form", UserFormData);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
