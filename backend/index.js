// Criando o express
const app = require('express')();
const consign = require('consign')
const db = require('./config/db')

// Passando o knex de banco de dados para o app
app.db = db

// Consign é usado para ajudar nas dependências dos arquivos com as funções
consign()
.then('./config/middlewares.js')
.then('./api')
.then('./config/routes.js')
.into(app)


// Iniciando na porta 300
app.listen(3000, () => {
    console.log('backend executando...')
})