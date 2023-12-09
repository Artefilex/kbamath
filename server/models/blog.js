const sequelize = require("../db/sql");
const { DataTypes } = require("sequelize");

const Blog = sequelize.define(
  "blog",
  {
    image : {
      type: DataTypes.STRING,
    }, 
    header: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
     paramsUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Blog;
