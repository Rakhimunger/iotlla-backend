// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb+srv://rakhimongre604:9rsrDR56gwRLc4ij@cluster0.lsoqwyj.mongodb.net/user"
//     );
//     console.log("MongoDB connected Successfully");
//   } catch (error) {
//     console.error("MongoDB connection Error:", error.message);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rakhimongre604:9rsrDR56gwRLc4ij@cluster0.lsoqwyj.mongodb.net/",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
