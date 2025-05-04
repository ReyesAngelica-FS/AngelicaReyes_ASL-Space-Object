'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Stars', [
      {
        name: 'Betelgeuse',
        type: 'Red Supergiant',
        distance: 642.5,
        galaxyId: 1, // ⚠️ Update this to a valid galaxy ID
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sirius',
        type: 'Main Sequence',
        distance: 8.6,
        galaxyId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stars', null, {});
  }
};
