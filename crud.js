const connection = require('./db.js')

const inserir = function insert(nome, ra){

    let sql = "INSERT INTO aluno SET ?"

    let dados = {nome:nome, ra:ra}

    connection.query(sql, dados, function (error, results, fields){

        if (error) throw error

        console.log("Cadastrado"+ results.InsertID)

    })

    connection.end()    

} 

const apagar = function del(cod){

    let sql = "delete from aluno where id = ?"

    let id = cod

    connection.query(sql, id, function(error, results, fields){

        if(error) throw error

        console.log("Apagado")

    })

    connection.end()

} 

const atualizar = function update(cod, nome, ra){

    let sql = "update aluno set ? where id = ?"

    let dados = {id:cod, nome:nome,ra:ra}

    let id = dados.id

    connection.query(sql, [dados,id], function(error, results,fields){

        if (error) throw error

        console.log("atualizado com sucesso " +results.afectedRows)

    })

    connection.end

}

 

const consulta = function selected(cod){

    let sql = "select * from aluno where id = ?"

    let id = cod

    connection.query(sql, id, function (error, results, fields){

        if (error) throw error

    if(results.length == 0){

        console.log("falha na busca")

    }

    let aula = results(0)

    console.log(aula.id+":"+aluno.nome+":"+aluno.ra)

    })

    connection.end

}

module.exports = { consulta, atualizar, apagar, inserir}