'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cards', [
      {
        question: 'Что такое замыкание в JavaScript?',
        answer: 'Это функция, которая запоминает своё лексическое окружение.',
        deckId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Что делает метод Array.map()?',
        answer: 'Создаёт новый массив, вызывая функцию для каждого элемента.',
        deckId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        question: 'Что такое Event Loop в Node.js?',
        answer: 'Это механизм, обрабатывающий асинхронные операции.',
        deckId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        question: 'Как установить npm-пакет глобально?',
        answer: 'Использовать команду npm install -g <package_name>',
        deckId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cards', null, {});
  },
};
