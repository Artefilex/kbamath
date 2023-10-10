const { DataTypes } = require("sequelize");
const sequelize = require("../db/sql");

const Skill = sequelize.define(
  "skill",
  {
    skillName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skillLevel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Skill;
