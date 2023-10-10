const { DataTypes } = require("sequelize");
const sequelize = require("../db/sql");

const Portfolio = sequelize.define(
  "portfolio",
  {
    header: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    projecturl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Portfolio;
