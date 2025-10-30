'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Decks', [
      {
        title: 'JavaScript Basics',
        description: 'Вопросы по основам JavaScript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Node.js',
        description: 'Основные концепции Node.js',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Decks', null, {});
  },
};
