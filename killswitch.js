const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors()); // Разрешаем CORS для всех доменов

app.get("/check", (req, res) => {
  res.json({ status: "active" });
});

app.listen(PORT, () => {
  console.log(`Kill switch API запущен на порту ${PORT}`);
});
