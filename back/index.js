const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const database = require("./db");

const PessoaRoutes = require("./app/routes/pessoa.routes");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/json" }));

app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Header", "*");
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send({ message: `API ouvindo na porta ${PORT}` });
});

app.use("/pessoas", PessoaRoutes);

app.get("*", (req, res) => {
  res.send({ message: `API não encontrada!` });
});

app.listen(PORT, () => console.log(`API ouvindo na porta ${PORT}`));
