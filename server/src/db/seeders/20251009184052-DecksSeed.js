'use strict';
const data = [
  {
    title: "Мир Гарри Поттера",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    title: "КиноМания",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    title: "Россия",
    createdAt: new Date(),
    updatedAt: new Date(),
  }
  
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
 async up(queryInterface) {
    await queryInterface.bulkInsert("Decks", data, {});
  },

 async down(queryInterface) {
    await queryInterface.bulkDelete('Decks', null, {})
  },
};
