const port = process.env.PORT || 3003 
const msg = require('./msgPT_BR')
const queryParser = require('express-query-int')
//body-parser  middleware responsável pelo parser nas resquições
const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
msg()

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, ()=>{
    console.log(`BACKEND na porta ${port}.`)
})

module.exports = server