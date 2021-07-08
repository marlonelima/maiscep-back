import mongoose, { Schema } from 'mongoose'

const CepSchema = new Schema({
  cep: {
    type: String,
    required: true
  },
  logradouro: {
    type: String,
    default: null
  },
  complemento: {
    type: String,
    default: null
  },
  bairro: {
    type: String,
    default: null
  },
  localidade: {
    type: String,
    required: true
  },
  uf: {
    type: String,
    required: true
  },
  ibge: {
    type: String,
    default: null
  },
  gia: {
    type: String,
    default: null
  },
  ddd: {
    type: String,
    default: null
  },
  siafi: {
    type: String,
    default: null
  }
})

const Cep = mongoose.model('Cep', CepSchema)

export { Cep }
