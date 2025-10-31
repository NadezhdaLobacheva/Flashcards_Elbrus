"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.belongsTo(models.Deck, {
        foreignKey: "deckId",
        as: "deck",
      });
    }
  }
  Card.init(
    {
      question: DataTypes.STRING,
      answer: DataTypes.STRING,
      deckId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Card",
    }
  );
  return Card;
};
