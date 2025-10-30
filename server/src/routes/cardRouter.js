const cardRouter = require('express').Router();
const CardController = require('../controllers/CardController');

cardRouter.get('/', CardController.getAllCards);
cardRouter.get('/:id', CardController.getCardById);

module.exports = cardRouter;
