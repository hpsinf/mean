const port = 3003

//body-parser  middleware responsável pelo parser nas resquições
const bodyParser = require('body-parser')

const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())

server.listen(port, ()=>{
    console.log(`BACKEND na porta ${port}.`)
})

module.exports = server