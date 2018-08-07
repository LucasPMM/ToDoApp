const mongoose = require('mongoose')    // Conexão e controle do mongo e mapeamento dos arquivos no banco de dados.
mongoose.Promise = global.Promise   // Retirar a mensagem de que a api está depreciada
module.exports = mongoose.connect('mongodb://localhost/todo')
