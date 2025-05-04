'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Planets', [
      {
        name: 'Earth',
        type: 'Terrestrial',
        description: 'Our home planet with life.',
        starId: 1, // Must match a seeded star
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mars',
        type: 'Terrestrial',
        description: 'Known as the red planet.',
        starId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jupiter',
        type: 'Gas Giant',
        description: 'The largest planet in our Solar System.',
        starId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Planets', null, {});
  }
};
