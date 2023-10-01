const mysql = require ('mysql2')

const connection = mysql.createConnection({

    host : "localhost",

    user : "root",

    password : "",

    database : "alunoform"

}) 

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack)
        return
    }
    console.log('Conexão bem-sucedida ao banco de dados com o ID ' + connection.threadId)
  })

module.exports = connection