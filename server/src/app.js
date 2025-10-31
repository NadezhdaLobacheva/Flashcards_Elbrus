require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;


const serverConfig = require("./config/serverConfig");
serverConfig(app);


const apiRouter = require("./routes/api.routes");
app.use("/api", apiRouter);

app.use("/api/auth", require("./routes/auth.routes"));



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
