const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Star = sequelize.define('Star', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  galaxyId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = Star;
