const CardService = require("../services/Card.service");

class CardController {
  static async getAllCards(req, res) {
    try {
      const cards = await CardService.getAllCards();

      if (!cards.length) {
        return res.status(404).json({ message: "Карточек нет" });
      }

      return res.status(200).json(cards);
    } catch (error) {
      console.error("Ошибка при получении карточек:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  static async getCardById(req, res) {
    const { id } = req.params;
    try {
      const cards = await CardService.getCardById(+id); 
      return res.status(200).json(cards);
    } catch (error) {
      console.error("Ошибка при получении карточек:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  static async createCard(req, res) {
    const { answer, question, deckId } = req.body;
    try {
      const cards = await CardService.createCard({ answer, question, deckId });
    
      if (!cards) return res.status(400).send("ОШИБКА");
      return res.status(200).json(cards);
    } catch (error) {
      console.error("Ошибка при получении карточек:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  static async updateCard(req, res) {
    const { id } = req.params;
    // const {}
    try {
      const updateCardById = await CardService.updateCard(+id, req.body);
      res.status(200).json(updateCardById);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
  static async deleteCard(req, res) {
    const { id } = req.params;
    try {
      const deleteCardById = await CardService.deleteCard(+id);
      res.status(200).json(deleteCardById);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
module.exports = CardController;
