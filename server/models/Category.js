const { DataTypes } = require("sequelize");
const sequelize = require("../db/sql");

const Category = sequelize.define(
  "category",
  {
    image : {
      type: DataTypes.STRING,
    }, 
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    paramsUrl:{
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    timestamps: false,
  }
);


module.exports = Category;