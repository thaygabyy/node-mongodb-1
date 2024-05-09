
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String
})

const Ingrediente = mongoose.model('Ingrediente', schema)

module.exports = Ingrediente


