const router = require('express').Router();

const cardRoutes = require('./card.routes');

router.use('/cards', cardRoutes);

router.use((req, res) => {
  res.status(404).json({ error: 'Маршрут не найден' });
});

module.exports = router;
