
const MongoDB = {
    nome: "MongoAtlas",
    user: "henrique",
    password: "unTy6cuxvaXDTscE",
    dominio: "hpsinf-xwblh.gcp.mongodb.net",
    porta: "27017",
    dbname: "hpsinf",
    initConnectString: "mongodb+srv://",    
}
const connectStringMongoDB = MongoDB.initConnectString + MongoDB.user + ':' + MongoDB.password +
        '@' + MongoDB.dominio + '/' + MongoDB.dbname

function dadosConexao(banco) {
    if (banco = "MongoDB") {
        return connectStringMongoDB
    }
}

module.exports = dadosConexao