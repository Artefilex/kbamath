const {DataTypes} = require("sequelize")
const sequelize = require("../db/sql");

const Education = sequelize.define(
    "education",
    {
     image : {
        type: DataTypes.STRING,
      }, 
    title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
     price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgUrl:{
        type: DataTypes.BLOB, //mülter ile entegre edecenz bunu
        allowNull: false
      },
      paramsUrl:{
        type: DataTypes.STRING,
        allowNull: false
      },
      content:{
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      timestamps: false,
    }
  );

  
  
  module.exports = Education;





