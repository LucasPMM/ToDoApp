// Alocação do servidor

const port = 3003

const bodyParser = require('body-parser')
const express = require('express')  // Express é o servidor web que roda em cima do node
const server = express()
const allowCors = require('./cors') // Permitindo o funcionamento do cors

server.use(bodyParser.urlencoded({ extended: true }))   // Sempre que chegar uma requisição o body-parser vai analisar
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server