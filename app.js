const express = require("express");
const connectDB = require("./Config/db");
const UserFormData = require("./Controllers/UserController");
const ContactForm = require("./Controllers/ContactController");
const cors = require("cors");

const app = express();

// Connect to database
connectDB();

// Proper CORS setup
const allowedOrigins = ['https://ion-lla-project.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // optional: only if you're sending cookies
}));

// Middleware
app.use(express.json());

// Routes
app.post("/api/form", UserFormData);
app.post("/api/contactform", ContactForm);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
