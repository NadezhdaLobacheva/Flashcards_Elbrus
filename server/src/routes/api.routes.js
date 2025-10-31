const router = require("express").Router();

const authRoutes = require("./auth.routes");
const userRoutes = require("./user.routes");
const cardRoutes = require("./card.routes");
const deckRoutes = require("./deck.routes");
const roundRoutes = require("./round.routes");


router.use("/auth", authRoutes);

// router.use("/users", verifyAccessToken, userRoutes);
// router.use("/cards", verifyAccessToken, cardRoutes);
// router.use("/decks", verifyAccessToken, deckRoutes);

// router.use("/rounds", verifyAccessToken, authorizeGamer, roundRoutes);

router.use("/users", userRoutes);
router.use("/cards", cardRoutes);
router.use("/decks", deckRoutes);

router.use("/rounds", roundRoutes);

router.use((req, res) => {
  res.status(404).json({ error: "Маршрут не найден" });
});

module.exports = router;
