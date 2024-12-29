const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("calorietracker", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
