const sequelize = require("../util/database");
const User = require("./user");
const FoodEntry = require("./foodEntry");

// Relationships
User.hasMany(FoodEntry, { foreignKey: "userId" });
FoodEntry.belongsTo(User, { foreignKey: "userId" });

module.exports = { sequelize, User, FoodEntry };
