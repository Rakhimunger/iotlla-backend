const formdata = require("../Models/ContactModel");

const ContactForm = async (req, res) => {
  try {
    const { name, email, contact, message } = req.body;

    // Basic required field check
    if (
      !name?.trim() ||
      !email?.trim() ||
      !contact?.trim() ||
      !message?.trim()
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Mobile number validation (India-specific)
    const mobileRegex = /^(\+91[\-\s]?)?[0]?[6789]\d{9}$/;
    if (!mobileRegex.test(contact)) {
      return res.status(400).json({ error: "Invalid mobile number" });
    }

    // Optional: message length check
    if (message.length < 2 || message.length > 500) {
      return res
        .status(400)
        .json({ error: "Message must be between 2 and 500 characters." });
    }

    // Create and save to DB
    const newMessage = new formdata({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      contact: contact.trim(),
      message: message.trim(),
    });

    await newMessage.save();

    return res.status(201).json({
      success: true,
      message: "Message submitted successfully!",
    });
  } catch (err) {
    console.error("Form Submission Error:", err);
    return res
      .status(500)
      .json({ error: "Server error, please try again later." });
  }
};

module.exports = ContactForm;
