const express = require("express");
const { sequelize } = require("./models");
const authRoutes = require("./routes/auth");
const foodRoutes = require("./routes/food");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/auth", authRoutes);
app.use("/food", foodRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  const PORT = 3000;
  app.listen(PORT, () =>
    console.log("Server running on http://localhost:3000/")
  );
});
