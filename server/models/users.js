const {DataTypes} = require("sequelize")
const sequelize = require("../db/sql");

const Users = sequelize.define(
    "users",
    {
     avatar:{
        type: DataTypes.STRING,
     },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isAdmin: {
        type:DataTypes.BOOLEAN,
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

  
  
  module.exports = Users;