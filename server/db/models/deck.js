'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      Deck.hasMany(models.Card, {
        foreignKey: 'deckId',
        as: 'cards',
        onDelete: 'CASCADE',
      });
    }
  }

  Deck.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Deck',
    },
  );

  return Deck;
};
