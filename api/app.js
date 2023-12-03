require('dotenv').config();
const express = require("express");
const app = express();
const logger = require("morgan");

const routes = require('./config/routes.config');
app.use("/api/v1", routes);

const cors = require("./config/cors.config");
app.use(cors);

app.use(express.json());

app.use((req, res, next) => {
  res.status(404).json({ error: 'No encontrado' });
});

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});