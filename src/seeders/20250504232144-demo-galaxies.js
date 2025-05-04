'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Galaxies', [
      {
        name: 'Milky Way',
        type: 'Spiral',
        description: 'Our home galaxy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Andromeda',
        type: 'Spiral',
        description: 'Closest galaxy to the Milky Way',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Galaxies', null, {});
  }
};
