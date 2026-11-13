// server.js - the SabziCart price API (Node.js + Express)
const express = require("express");
const os = require("os");
const app = express();
const PORT = process.env.PORT || 5001;
const prices = { tomato: 180, onion: 120, potato: 90, spinach: 60 };
app.get("/", (req, res) => {
res.send("NodeAPI Service API is running for DevOps Batch#2. Try /api/prices\n");
});
app.get("/api/health", (req, res) => {
res.json({ status: "ok", server: os.hostname(), node: process.version });
});
app.get("/api/prices", (req, res) => {
res.json({ currency: "PKR per kg", prices: prices });
});
app.listen(PORT, "127.0.0.1", () => {
console.log(`SabziCart API listening on 127.0.0.1:${PORT}`);
});
