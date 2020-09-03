const mongoose = require('mongoose')

const
nome = "MongoAtlas",
user = "henrique",
password = "unTy6cuxvaXDTscE",
dominio = "hpsinf-xwblh.gcp.mongodb.net",
porta = "27017",
dbname = "hpsinf",
initConnectString = "mongodb+srv://"

mongoose.set('useFindAndModify', false)

const connectString = initConnectString + user + ':' + password +
'@' + dominio + '/' + dbname
mongoose.connect(connectString, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', err => {
    console.log(err)
})

db.once('open', () => {
    console.log(`Conectado ao ${nome}`)
})

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo '{MIN}'"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo '{MAX}'"

module.exports = mongoose