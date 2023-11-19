const {DataTypes} = require("sequelize")
const sequelize = require("../db/sql");

const Quizs = sequelize.define(
    "quizs",
    {
     quizHeader: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     iframeUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mainUrl:{
        type: DataTypes.STRING,
        allowNull: false
      },
      headerImg:{
        type: DataTypes.STRING,
        allowNull: false
      },
      height:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );

  
  
  module.exports = Quizs;

