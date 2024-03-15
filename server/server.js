const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const { verifyAdmin } = require("./middleware/authMiddleware");
const cookieParser = require("cookie-parser");

// setup middleware
app.use(express.json());
const port = process.env.PORT || 5000;

// connect to database
connectDB();

// setup middleware
app.use(cookieParser());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/check", verifyAdmin);

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
