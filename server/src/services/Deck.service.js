const { Deck } = require("../db/models");

class DeckService {
  static async getAllDecks() {
    return await Deck.findAll();
  }

  static async getDeckById(id) {
    return await Deck.findByPk(id);
  }

  static async createDeck(data) {
    return await Deck.create(data);
  }

  static async updateDeck(id, data) {
    const deck = await Deck.findByPk(id);
    if (!deck) return null;
    return await deck.update(data);
  }

  static async deleteDeck(id) {
    const deck = await Deck.findByPk(id);
    if (!deck) return null;
    return await deck.destroy();
  }
}
module.exports = DeckService;