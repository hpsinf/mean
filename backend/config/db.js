//mongoose ODM mongoDB
const mongoose = require('mongoose')
const dadosBD = require('./dadosAcessoBD')

mongoose.set('useFindAndModify', false)

mongoose.connect(dadosBD("MongoDB"), { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection


db.on('error', err => {
    console.log(err)
})

db.once('open', () => {
    console.log("Conexão ao BD OK")
})



module.exports = mongoose