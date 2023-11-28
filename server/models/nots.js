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
    class:{
      type: DataTypes.JSON,
      allowNull: false,
    },
    description: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    paramsUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);


module.exports = Nots;
