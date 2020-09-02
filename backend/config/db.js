const mongoose = require('mongoose')

const
nome = "MongoAtlas",
user = "henrique",
password = "unTy6cuxvaXDTscE",
dominio = "hpsinf-xwblh.gcp.mongodb.net",
porta = "27017",
dbname = "hpsinf",
initConnectString = "mongodb+srv://"


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

module.exports = mongoose