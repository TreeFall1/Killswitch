const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors({ origin: "*" })); // Явно разрешаем любой origin

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/check", (req, res) => {
  res.json({ status: "active" });
});

app.listen(PORT, () => {
  console.log(`Kill switch API запущен на порту ${PORT}`);
});
