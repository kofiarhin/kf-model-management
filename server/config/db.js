const mongoose = require("mongoose");
const connectDB = async () => {
  const url = process.env.MONGO_PROD_URI;
  const conn = await mongoose.connect(url);

  console.log(`connected to database ${conn.connection.host}`);
};

module.exports = connectDB;
