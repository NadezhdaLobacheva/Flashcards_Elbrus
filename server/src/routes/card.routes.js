const cardRouter = require("express").Router();
const CardController = require("../controllers/Card.controller");

cardRouter.get("/", CardController.getAllCards);
cardRouter.get("/:id", CardController.getCardById);
cardRouter.post("/", CardController.createCard);
cardRouter.put("/:id", CardController.updateCard);
cardRouter.delete("/:id", CardController.deleteCard);

module.exports = cardRouter;
