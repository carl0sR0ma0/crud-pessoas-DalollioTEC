const express = require("express");
const Pessoa = require("../controller/pessoa.controller");
const route = express.Router();

route.post("/criar", Pessoa.novaPessoa);
route.get("/listar-todos", Pessoa.listarPessoas);
route.get("/listarUm/:id", Pessoa.listarUmaPessoa);
route.put("/atualizar/:id", Pessoa.alterarUmaPessoa);
route.delete("/deletar/:id", Pessoa.apagarUmaPessoa);

module.exports = route;
