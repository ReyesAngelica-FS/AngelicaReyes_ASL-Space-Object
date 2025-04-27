const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const StarsPlanets = sequelize.define('StarsPlanets', {
  starId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  planetId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = StarsPlanets;
