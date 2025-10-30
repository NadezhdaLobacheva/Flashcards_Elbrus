const deckRouter = require("express").Router();
const DeckController = require("../controllers/DeckController");

deckRouter.get("/", DeckController.getAllDecks);
deckRouter.get("/:id", DeckController.getDeckById);
deckRouter.post("/", DeckController.createDeck);
deckRouter.put("/:id", DeckController.updateDeck);
deckRouter.delete("/:id", DeckController.deleteDeck);

module.exports = deckRouter;