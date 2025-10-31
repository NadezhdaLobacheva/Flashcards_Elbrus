"use strict";
const data = [
  {
    title: "TOMAS WORLD",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Pepe",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "ImageCat",
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
