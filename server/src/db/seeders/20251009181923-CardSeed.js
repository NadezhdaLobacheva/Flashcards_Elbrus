"use strict";
const data = [
  {
    question: "Какое заклинание используется для создания света?",
    answer: "Люмос",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "В кого превращался Питер Петтигрю?",
    answer: "Крыса",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какое прозвище было у Северуса Снейпа?",
    answer: "Принц-полукровка",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какой предмет нужно было достать в первом испытании Турнира Трех Волшебников?",
    answer: "Яйцо",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Кто был крестным отцом Гарри?",
    answer: "Сириус Блек",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Как называется газетное издание волшебного мира?",
    answer: "Ежедневный пророк",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "В какое животное могла превращаться профессор МакГонагалл?",
    answer: "Кошка",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какой патронус у Гарри Поттера?",
    answer: "Олень",
    deckId: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "Какая фамилия у главного героя 'Бойцовского клуба'?",
    answer: "Дарден",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "Какой фильм с Леонардо ДиКаприо про сны внутри снов?",
    answer: "Начало",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "Какой артефакт нес Фродо Бэггинс?",
    answer: "Кольцо",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "Кто был создателем Железного человека?",
    answer: "Тонни Старк",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "Как называется планета в 'Аватаре'?",
    answer: "Пандорра",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "Какая игра была в фильме 'Джуманджи'?",
    answer: "Джуманджи",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "Кто главный герой 'Крестного отца'?",
    answer: "Дон Корлеоне",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
    {
    question: "Кто играл Джокера в 'Темном рыцаре'?",
    answer: "Хит Леджер",
    deckId: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какой дворец под Санкт-Петербургом знаменит своими фонтанами?",
    answer: "Петергоф",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какое озеро самое глубокое в мире?",
    answer: "Байкал",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какой вулкан находится на Камчатке?",
    answer: "Ключевская сопка",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какой музей в Санкт-Петербурге самый известный?",
    answer: "Эрмитаж",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какая крепость является символом Москвы?",
    answer: "Кремль",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какой пролив разделяет Россию и Аляску?",
    answer: "Берингов",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какая горная система разделяет Европу и Азию?",
    answer: "Урал",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
      {
    question: "Какой памятник в Волгограде символизирует победу?",
    answer: "Родина-мать",
    deckId: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
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
