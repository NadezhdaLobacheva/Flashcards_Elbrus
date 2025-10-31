const DeckService = require("../services/Deck.service");

class DeckController {
  static async getAllDecks(req, res) {
    try {
      const decks = await DeckService.getAllDecks();

      if (!decks.length) {
        return res.status(404).json({ message: "Карточек нет" });
      }

      return res.status(200).json(decks);
    } catch (error) {
      console.error("Ошибка при получении карточек:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  static async getDeckById(req, res) {
    const { id } = req.params;
    try {
      const decks = await DeckService.getDeckById(+id);
      return res.status(200).json(decks);
    } catch (error) {
      console.error("Ошибка при получении карточек:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  static async createDeck(req, res) {
    const { title } = req.body;
    if (!req.body || !req.body.title) {
      return res.status(400).json({ message: "Поле 'title' обязательно" });
    }
    try {
      const decks = await DeckService.createDeck({ title }); 
      if (!decks) return res.status(400).send("ОШИБКА");
      return res.status(200).json(decks);
    } catch (error) {
      console.error("Ошибка при получении карточек:", error);
      return res.status(500).json({ message: "Ошибка сервера" });
    }
  }

  static async updateDeck(req, res) {
    const { id } = req.params;
    try {
      const updateDeckById = await DeckService.updateDeck(id, req.body);
      res.status(200).json(updateDeckById);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  static async deleteDeck(req, res) {
    const { id } = req.params;
    try {
      const deleteDeckById = await DeckService.deleteDeck(+id);
      res.status(200).json(deleteDeckById);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
}
module.exports = DeckController;
