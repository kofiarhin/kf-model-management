const express = require("express");
const dotenv = require("dotenv").config();
const path = require("path");
const app = express();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const castingRoutes = require("./routes/castingRoutes");
const imageRoutes = require("./routes/ImageRoutes");
const { verifyAdmin } = require("./middleware/authMiddleware");
const cookieParser = require("cookie-parser");

// setup middleware
app.use(cookieParser());
app.use(express.json());
const port = process.env.PORT || 5000;

// connect to database
connectDB();

// setup middleware

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/check", verifyAdmin);
app.use("/api/castings", castingRoutes);
app.use("/api/images", imageRoutes);

if (process.env.NODE_ENV === "production") {
  // define paths
  const publicPath = path.join(__dirname, "./build");
  const filePath = path.resolve(__dirname, ".", "build", "index.html");

  app.use(express.static(publicPath));

  app.get("*", (req, res) => {
    // const fileUrl = path.resolve(__dirname, "server", "build");
    return res.sendFile(filePath);
  });
}

// error handler
app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
