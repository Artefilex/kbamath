const {DataTypes} = require("sequelize")
const sequelize = require("../db/sql");

const Quizs = sequelize.define(
    "quizs",
    {
      image : {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     iframeUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paramsUrl:{
        type: DataTypes.STRING,
      },
      iframeHeight:{
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );

  
  
  module.exports = Quizs;

