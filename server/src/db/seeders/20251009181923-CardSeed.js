"use strict";

const data = [
  // ===== Искусственный интеллект (deckId: 1) =====
  {
    question:
      "Как называется технология, имитирующая работу человеческого мозга?",
    answer: "Нейронная сеть",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question:
      "Какая компания разработала язык Python, часто используемый в ML?",
    answer: "Python Software Foundation",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Как называется процесс, когда ИИ обучается на примерах?",
    answer: "Обучение с учителем",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Какой фреймворк используется для глубокого обучения от Google?",
    answer: "TensorFlow",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Какой алгоритм используется для классификации текстов и спама?",
    answer: "Наивный байесовский классификатор",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // ===== Великие изобретения (deckId: 2) =====
  {
    question: "Кто изобрёл лампу накаливания?",
    answer: "Томас Эдисон",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question:
      "Какое изобретение позволило людям быстро передавать сообщения на расстоянии?",
    answer: "Телеграф",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Кто создал первый персональный компьютер Apple I?",
    answer: "Стив Возняк",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Какое изобретение сделало возможным полёты человека?",
    answer: "Самолёт",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Кто изобрёл печатный станок?",
    answer: "Иоганн Гутенберг",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  // ===== Мир животных (deckId: 3) =====
  {
    question: "Какое животное является самым крупным на Земле?",
    answer: "Синий кит",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Какое животное может спать стоя?",
    answer: "Лошадь",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Какое насекомое живёт самой крупной колонией?",
    answer: "Муравей",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Какое животное известно своей способностью менять цвет?",
    answer: "Хамелеон",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    question: "Какой птице принадлежит самое большое яйцо?",
    answer: "Страус",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Cards", data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Cards", null, {});
  },
};
