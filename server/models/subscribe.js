const { DataTypes } = require("sequelize");
const sequelize = require("../db/sql");

const Subscribe = sequelize.define(
  "subscribe",
  {
    email: {
      type: DataTypes.STRING,
      allownull: false,
    },
  },
  { timestamps: true }
);

module.exports = Subscribe;
