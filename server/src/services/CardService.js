const { Card } = require('../../db/models');

class CardService {
  static getAllCards() {
    return Card.findAll();
  }

  static getCardById(id) {
    return Card.findByPk(id);
  }
}

module.exports = CardService;
