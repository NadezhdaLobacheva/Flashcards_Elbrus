"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Deck extends Model {
    static associate(models) {
      Deck.hasMany(models.Card, { foreignKey: "deckId", as: "cards" });
      Deck.hasMany(models.Round, { foreignKey: "deckId", as: "rounds" });
    }

    static validate({ title }) {
      if (!title || typeof title !== "string" || title.trim().length === 0)
        return {
          isValid: false,
          err: "Название должно быть не пустой строкой",
        };
      return {
        isValid: true,
        err: null,
      };
    }
  }
  Deck.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Deck",
    }
  );
  return Deck;
};
