const { DataTypes } = require("sequelize");
const sequelize = require("../db/sql");

const Nots = sequelize.define(
  "nots",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // children: {
    //   type: DataTypes.ARRAY(DataTypes.JSONB),
    //   allowNull: false,
    // },
  },
  {
    timestamps: false,
  }
);


module.exports = Nots;
