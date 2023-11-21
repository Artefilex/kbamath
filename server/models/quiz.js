const {DataTypes} = require("sequelize")
const sequelize = require("../db/sql");

const Quizs = sequelize.define(
    "quizs",
    {
      image : {
        type: DataTypes.STRING,
      },
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
      },
      headerImg:{
        type: DataTypes.BLOB,
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

