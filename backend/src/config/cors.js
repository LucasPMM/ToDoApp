// Arquivo de configuração pois o frontend e o backend são separados, sendo considerados duas aplicações difrentes
module.exports = function(req, res, next) { // requisição, resposta, proxima tarefa
    res.header('Access-Control-Allow-Origin', '*') // permitir requisições de aplicações externas
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE') // Métodos permitidos pela aplicação
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept') // Alguns outros metodos a serem permitidos para que as requisições de outras aplicações sejam bem sucedidas
    next()
}