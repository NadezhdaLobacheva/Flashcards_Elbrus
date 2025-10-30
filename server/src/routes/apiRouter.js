const router = require('express').Router();

const cardRoutes = require('../routes/cardRouter');
const deckRoutes = require('../routes/deckRouter');

router.use('/cards', cardRoutes);
router.use('/decks', deckRoutes);

router.use((req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' });
});

module.exports = router;
