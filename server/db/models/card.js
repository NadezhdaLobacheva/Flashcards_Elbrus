'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    static associate(models) {
      Card.belongsTo(models.Deck, {
        foreignKey: 'deckId',
        as: 'deck',
      });
    }
  }

  Card.init(
    {
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deckId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Decks', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Card',
    },
  );

  return Card;
};
