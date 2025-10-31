'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Round extends Model {

    static associate(models) {
      Round.belongsTo(models.Deck, {
  foreignKey: 'deckId',
  as: 'deck',
});

Round.belongsTo(models.User, {
  foreignKey: 'userId',
  as: 'user',
});

    }
  }
  Round.init({
    userId: DataTypes.INTEGER,
    deckId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Round',
  });
  return Round;
};