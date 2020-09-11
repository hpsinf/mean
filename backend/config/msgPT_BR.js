const mongoose = require('mongoose')

function msg(){
    mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
    mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo '{MIN}'"
    mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo '{MAX}'"
    
    console.log("mensagens PT-BR OK")
}

module.exports = msg