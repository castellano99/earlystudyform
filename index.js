const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const crud = require('./crud.js')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'forms.html'))
});

app.post('/enviarform', (req, res) => {
  const { nome, ra } = req.body
  crud.inserir(nome, ra)
});

app.listen(3000, () => {
    console.log(`Servidor rodando na porta`);
});