const { DataTypes } = require("sequelize");
const sequelize = require("../db/sql");

const Nots = sequelize.define(
  "nots",
  {
    image : {
      type: DataTypes.STRING,
    }, 
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    children: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);


module.exports = Nots;
