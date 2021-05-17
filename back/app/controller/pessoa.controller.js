const pessoa = require("./../model/pessoa.model");

class Pessoa {
  novaPessoa(req, res) {
    const body = req.body;

    pessoa.create(body, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Houve um erro ao processar a sua requisição",
          error: err,
        });
      } else {
        res.status(201).send({
          message: "Pessoa criada com sucesso no banco de dados",
          pessoa: data,
        });
      }
    });
  }

  listarPessoas(req, res) {
    pessoa.find({}, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Houve um erro ao processar sua requisição",
          error: err,
        });
      } else {
        res.status(200).send({
          message: "Todas pessoas recuperadas do banco de dados com sucesso!!!",
          data: data,
        });
      }
    });
  }

  listarUmaPessoa(req, res) {
    const id = req.params.id;

    pessoa.findOne({ _id: id }, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Houve um erro ao processar sua requisição",
          error: err,
        });
      } else {
        if (data == null) {
          res.status(404).send({
            message: "Não há registro encontrado no banco de dados",
          });
        } else {
          res.status(200).send({
            message: "Registro recuperado com sucesso!!!",
            pessoa: data,
          });
        }
      }
    });
  }

  alterarUmaPessoa(req, res) {
    const id = req.params.id;
    const body = req.body;

    pessoa.updateOne({ _id: id }, { $set: body }, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Houve um erro ao processar sua requisição",
          error: err,
        });
      } else {
        res.status(200).send({
          message: `Dados da pessoa ${body.nome} atualizado com sucesso`,
          updade: data,
        });
      }
    });
  }

  apagarUmaPessoa(req, res) {
    const id = req.params.id;

    pessoa.deleteOne({ _id: id }, (err) => {
      if (err) {
        res.status(500).send({
          message: "Houve um erro ao processar sua requisição",
          error: err,
        });
      } else {
        res.status(200).send({
          message: `A pessoa que tem o _id = ${id} foi apagada com sucesso!!!`,
        });
      }
    });
  }
}
module.exports = new Pessoa();
