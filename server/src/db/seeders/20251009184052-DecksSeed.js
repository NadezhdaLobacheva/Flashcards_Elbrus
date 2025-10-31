"use strict";
const data = [
  {
    title: "Искусственный интеллект",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Великие изобретения",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Мир животных",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Decks", data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Decks", null, {});
  },
};
