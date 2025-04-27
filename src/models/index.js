const Galaxy = require('./galaxy');
const Star = require('./star');
const Planet = require('./planet');
const StarsPlanets = require('./starsplanets');

// Associations
Galaxy.hasMany(Star, { foreignKey: 'galaxyId', onDelete: 'CASCADE' });
Star.belongsTo(Galaxy, { foreignKey: 'galaxyId' });

Star.belongsToMany(Planet, { through: StarsPlanets, foreignKey: 'starId', otherKey: 'planetId' });
Planet.belongsToMany(Star, { through: StarsPlanets, foreignKey: 'planetId', otherKey: 'starId' });

module.exports = { Galaxy, Star, Planet, StarsPlanets };
