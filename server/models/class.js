const {DataTypes} = require("sequelize")
const sequelize = require("../db/sql");

const Class = sequelize.define(
    "class",
    {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      paramsUrl:{
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {
      timestamps: false,
    }
  );

  
  
  module.exports = Class;