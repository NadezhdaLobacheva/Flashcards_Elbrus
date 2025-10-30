const CardService = require('../services/CardService');

class CardController {
  static async getAllCards(req, res) {
    try {
      const card = await CardService.getAllCards();

      if (!card.length) {
        return res.status(404).json({ message: 'Карточек нет' });
      }

      return res.status(200).json(card);
    } catch (error) {
      console.error('Ошибка при получении карточек:', error);
      return res.status(500).json({ message: 'Ошибка сервера' });
    }
  }

  static async getCardById(req, res) {
    const { id } = req.params;
    try {
      const cards = await CardService.getCardById(+id);
      return res.status(200).json(cards);
    } catch (error) {
      console.error('Ошибка при получении карточек:', error);
      return res.status(500).json({ message: 'Ошибка сервера' });
    }
  }
}

module.exports = CardController;
