const router = require("express").Router();
// const authRouter = require("./authRouter"); 
// const itemRouter = require("./itemRouter");
// const cartRouter = require("./cartRouter");

// router.use("/items", itemRouter);
// router.use("/carts", cartRouter);
// router.use("/auth", authRouter);

router.use((req, res) => {
  res.status(404).json({ message: "Маршрут не найден" });
});

module.exports = router;