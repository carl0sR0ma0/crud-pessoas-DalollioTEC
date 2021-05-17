const { Schema, model } = require("mongoose");
const Pessoa = new Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    data_nasc: {
      type: Date,
    },
    endereco: {
      type: String,
      trim: true,
    },
    cpf: {
      type: String,
      maxLength: 14,
      trim: true,
      required: true,
    },
    fone: {
      type: String,
      maxLength: 11,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
    },
    obs: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
module.exports = model("Pessoa", Pessoa);
