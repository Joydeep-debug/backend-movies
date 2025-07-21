const mongoose = require("mongoose");
require("dotenv").config();

const mongoUri = process.env.MONGODB;

const initializeDatabase = async () => {
    try {
  const connection = await mongoose.connect(mongoUri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  if (connection) {
    console.log("Connected successfully");
  }
} catch (error) {
  console.log("Connection failed", error);
}
}

module.exports = {initializeDatabase};