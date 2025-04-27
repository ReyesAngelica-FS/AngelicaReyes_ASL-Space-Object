const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Galaxy = sequelize.define('Galaxy', {
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
  }
});

module.exports = Galaxy;
