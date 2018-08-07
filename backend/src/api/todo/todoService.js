const Todo = require('./todo')  // Só é possível pois ocorreu o module.exports no arquivo todo.js

Todo.methods(['get', 'post', 'put', 'delete'])  // Comandos que eu quero habilitar na api rest provida pelo node restful
Todo.updateOptions({new: true, runValidators: true})    // Quando algum dado for alterado, qualquer requisição desse dado já informa o novo valor desse dado

module.exports = Todo