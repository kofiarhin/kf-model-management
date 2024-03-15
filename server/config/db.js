const mongoose = require("mongoose");
const connectDB = async () => {
  const url = "mongodb://localhost/modelmanagement";
  const conn = await mongoose.connect(url);

  console.log(`connected to database ${conn.connection.host}`);
};

module.exports = connectDB;
