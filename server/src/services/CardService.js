const { Card } = require('../../db/models');

class CardService {
  static async getAllCards() {
    return await Card.findAll();
  }

  static async getCardById(id) {
    return await Card.findByPk(id);
  }

  static async createCard(data) {
    return await Card.create(data);
  }

  static async updateCard(id, data) {
    const card = await Card.findByPk(id);
    if (!card) return null;
    return await card.update(data);
  }

  static async deleteCard(id) {
    const card = await Card.findByPk(id);
    if (!card) return null;
    return await card.destroy();
  }
}

module.exports = CardService;
