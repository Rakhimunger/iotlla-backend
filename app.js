const express = require("express");
const connectDB = require("./Config/db");
const UserFormData = require("./Controllers/UserController");
const ContactForm = require("./Controllers/ContactController");
const app = express();
const cors = require("cors");

connectDB(); // Database connect
app.use(cors()); // CORS allow
app.use(express.json()); // JSON parser

app.post("/api/userform", UserFormData); // Route connected
app.post("/api/contactform", ContactForm); // Route connected

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
