const { DataTypes } = require("sequelize");
const sequelize = require("../db/sql");

const Nots = sequelize.define(
  "nots",
  {
    image: {
      type: DataTypes.BLOB("long"),
    },
   mimetype: {
    type: DataTypes.STRING,
    allowNull: false,
   },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
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
